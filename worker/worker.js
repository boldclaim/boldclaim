/**
 * Bold Claim API Worker
 * Deploy to Cloudflare Workers (free tier)
 *
 * Environment variables needed:
 *   PINECONE_API_KEY   - from app.pinecone.io
 *   PINECONE_INDEX     - "counter-speech"
 *   PINECONE_HOST      - your index host URL (from Pinecone dashboard)
 *
 * Optional (Trust Layer, see handleVerify):
 *   ANTHROPIC_API_KEY  - enables the claim-to-source check. If unset, the
 *                        verify endpoint degrades to verdict "unknown" and the
 *                        answer is surfaced unchanged. A per-request BYOK key
 *                        ("anthropicKey" in the body) is used if present and
 *                        takes precedence. The key is never hardcoded.
 *
 * LLM: Cloudflare Workers AI (built-in, no extra key needed)
 */

// Tactics loaded from META/web-method.md at build time (node build.js).
// Edit web-method.md → run: node build.js && wrangler deploy
import { METHOD_TACTICS } from './tactics.js';

// Trust Layer model: a small cheap Anthropic model used once on the final
// answer to confirm the claim traces to and matches the cited source.
const TRUST_MODEL = 'claude-haiku-4-5';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    if (request.method !== 'POST') {
      return new Response('POST only', { status: 405, headers: CORS });
    }

    try {
      const body = await request.json();
      const { action, mode, text, platform, goal, tone, lang } = body;

      // Trust Layer: claim-to-source check on the already-assembled answer.
      // Runs once, on the final answer, on its own request so the client can
      // fire it in parallel with rendering and the user never waits for it.
      if (action === 'verify') {
        return await handleVerify(env, body);
      }

      // Live source fetch: server-side (the browser can't, CORS). Returns a text excerpt of a
      // public source URL so the critic can reconcile the draft's numbers against the live page.
      if (action === 'fetchSource' && body.url) {
        return await handleFetchSource(body.url);
      }

      // Context endpoint for the BYOK chat: search-only. Returns { docs, systemPrompt }
      // so the chat renders real sources and grounds its own (BYOK) generation. The
      // worker only sees the search query, never the user's provider key or final answer.
      if (body.query && !mode) {
        return await handleContext(env, body);
      }

      if (!text || !mode) {
        return json({ error: 'mode and text required' }, 400);
      }

      // Step 1: Search Pinecone for relevant konters
      const konters = await searchPinecone(env, text);

      // Step 2: Build prompt
      const systemPrompt = METHOD_TACTICS;
      const contextBlock = konters.length > 0
        ? 'Relevante Konter-Daten aus der Datenbank:\n\n' +
          konters.map((k, i) => {
            const label = [k.file, k.section].filter(Boolean).join(' › ');
            const tierLabel = k.source_tier ? ` [${k.source_tier}]` : '';
            return `[${i+1}]${tierLabel} (${label}) ${k.text}`;
          }).join('\n\n')
        : 'Keine spezifischen Konter in der Datenbank gefunden. Antworte basierend auf Allgemeinwissen.';

      const platformNote = platform ? `Plattform: ${platform}. Passe Länge und Ton entsprechend an.` : '';
      const goalNote = goal ? `Ziel: ${goal}.` : '';
      const toneNote = tone ? `Tonfall: ${tone}.` : '';

      const langNote = lang === 'en' ? 'IMPORTANT: Respond entirely in English. Translate any German sources/quotes inline.\n\n' : '';

      const userPrompt = `${langNote}${platformNote} ${goalNote} ${toneNote}

${contextBlock}

---
Kommentar des Gegners:
${text}

---
Generiere deine Antwort.`;

      // Step 3: Call Cloudflare Workers AI
      const reply = await callWorkersAI(env, systemPrompt, userPrompt);

      // Step 4: Return results with text snippets plus provenance labels
      const sources = konters.map(k => {
        const raw = (k.text || '').replace(/\n+/g, ' ').trim();
        const snippet = raw.length > 140 ? raw.substring(0, 140) + '\u2026' : raw;
        // file is kept server-side for the model context only; never sent to the client
        return { snippet, section: k.section || '', score: k.score };
      });

      return json({ reply, sources, mode, kontersFound: konters.length });

    } catch (err) {
      return json({ error: err.message }, 500);
    }
  }
};

async function searchPinecone(env, query, namespace = 'default', topK = 5) {
  const host = env.PINECONE_HOST.startsWith('https://') ? env.PINECONE_HOST : `https://${env.PINECONE_HOST}`;
  const res = await fetch(`${host}/records/namespaces/${namespace}/search`, {
    method: 'POST',
    headers: {
      'Api-Key': env.PINECONE_API_KEY,
      'Content-Type': 'application/json',
      'X-Pinecone-API-Version': '2025-01'
    },
    body: JSON.stringify({
      query: { inputs: { text: query }, top_k: topK },
      fields: ['text', 'file', 'section', 'rebuttal', 'rebuttal_answer', 'source_tier']
    })
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.result?.hits || []).map(h => ({
    text: h.fields?.text || '',
    file: h.fields?.file || '',
    section: h.fields?.section || '',
    rebuttal: h.fields?.rebuttal ?? '',
    rebuttal_answer: h.fields?.rebuttal_answer ?? '',
    source_tier: h.fields?.source_tier || '',
    score: h._score || 0
  }));
}

// --- Context endpoint (BYOK chat) ---------------------------------------
// Search-only. Retrieves from the KB and returns the docs (clean topic labels,
// never file paths) plus a grounding system prompt. The chat does its own BYOK
// generation, so the worker never sees the user's provider key or final counter,
// only the search query.
async function handleContext(env, body) {
  const { query, platform, tone, lang } = body;
  const hits = await searchPinecone(env, (query || '').toString());

  // docs for the chat UI: topic/section label only, plus a short snippet and score.
  const docs = hits.map(k => {
    const raw = (k.text || '').replace(/\n+/g, ' ').trim();
    const snippet = raw.length > 220 ? raw.substring(0, 220) + '…' : raw;
    return { source: k.section || '', snippet, score: k.score, rebuttal: k.rebuttal ?? '', rebuttal_answer: k.rebuttal_answer ?? '' };
  });

  // grounding context: the full source text goes into the system prompt only.
  const contextBlock = hits.length
    ? 'Relevante Konter-Daten aus der Bold-Claim-Datenbank. Nutze sie als Faktenbasis, erfinde nichts dazu und beziehe dich auf die Quellen:\n\n' +
      hits.map((k, i) => `[${i + 1}] (${k.section || 'Quelle'}) ${k.text}`).join('\n\n')
    : 'Keine spezifischen Konter in der Datenbank gefunden. Antworte vorsichtig und nur auf Basis gesicherten Allgemeinwissens.';

  const platformNote = platform ? `Plattform: ${platform}. Passe Länge und Ton an.` : '';
  const toneNote = tone ? `Tonfall: ${tone}.` : '';
  const langNote = lang === 'en' ? 'IMPORTANT: Respond entirely in English; translate any German sources inline.' : '';

  const systemPrompt = `${METHOD_TACTICS}

${platformNote} ${toneNote} ${langNote}

${contextBlock}`;

  // Source URLs from the retrieved evidence, so the client can live-fetch them in the critic pass.
  const sourceUrls = [...new Set(hits.flatMap(k => (k.text || '').match(/https?:\/\/[^\s)<\]]+/g) || []))].slice(0, 3);

  return json({ docs, systemPrompt, tactics: METHOD_TACTICS, sourceUrls });
}

// --- Live source fetch ---------------------------------------------------
// Server-side fetch of a public source URL (browsers can't, CORS). Returns a plain-text
// excerpt so the critic can check the draft's numbers against the live page and catch stale
// indexed figures. Bounded: http(s) + public host + text content, size-capped, never throws.
// Block loopback / private / link-local / cloud-metadata hosts across encodings.
// Workers can't resolve DNS before fetch, so this is a literal-host denylist,
// hardened against octal/hex/decimal + IPv4-mapped + trailing-dot tricks.
function isBlockedHost(rawHost) {
  let h = String(rawHost || '').toLowerCase().replace(/\.$/, '').replace(/^\[|\]$/g, '');
  if (!h) return true;
  if (h === 'localhost' || h.endsWith('.localhost') || h.endsWith('.internal') || h.endsWith('.local')) return true;
  if (h === '::1' || h === '::' || /^fe80:/.test(h) || /^f[cd][0-9a-f]{2}:/.test(h)) return true;
  const mapped = h.match(/^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/);
  if (mapped) h = mapped[1];
  const toInt = (s) => {
    const parts = s.split('.'), nums = [];
    for (const p of parts) {
      let n;
      if (/^0x[0-9a-f]+$/.test(p)) n = parseInt(p, 16);
      else if (/^0[0-7]+$/.test(p)) n = parseInt(p, 8);
      else if (/^\d+$/.test(p)) n = parseInt(p, 10);
      else return null;
      if (!Number.isFinite(n) || n < 0) return null;
      nums.push(n);
    }
    if (nums.length === 4 && nums.every(n => n <= 255)) return ((nums[0] << 24) | (nums[1] << 16) | (nums[2] << 8) | nums[3]) >>> 0;
    if (nums.length === 1 && nums[0] <= 0xffffffff) return nums[0] >>> 0;
    return null;
  };
  const ip = toInt(h);
  if (ip !== null) {
    const inNet = (base, bits) => (ip >>> (32 - bits)) === (base >>> (32 - bits));
    if (inNet(0x00000000, 8) || inNet(0x7f000000, 8) || inNet(0x0a000000, 8) ||
        inNet(0xac100000, 12) || inNet(0xc0a80000, 16) || inNet(0xa9fe0000, 16)) return true;
  }
  return false;
}

async function handleFetchSource(url) {
  try {
    let u = new URL(String(url));
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return json({ text: '' });
    if (isBlockedHost(u.hostname)) return json({ text: '' });
    // Manual redirects: re-check every hop so a public host can't bounce us inward.
    let res, hops = 0;
    while (true) {
      res = await fetch(u.toString(), {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; BoldClaim/1.0)' },
        redirect: 'manual',
        cf: { cacheTtl: 600, cacheEverything: true }
      });
      const loc = (res.status >= 300 && res.status < 400) ? res.headers.get('location') : null;
      if (!loc) break;
      if (++hops > 3) return json({ text: '', note: 'too-many-redirects' });
      let next;
      try { next = new URL(loc, u); } catch (e) { return json({ text: '' }); }
      if ((next.protocol !== 'http:' && next.protocol !== 'https:') || isBlockedHost(next.hostname)) return json({ text: '' });
      u = next;
    }
    if (!res.ok) return json({ text: '', status: res.status });
    const ct = (res.headers.get('content-type') || '').toLowerCase();
    if (!/text\/|html|json|xml/.test(ct)) return json({ text: '', note: 'non-text' });
    let t = await res.text();
    t = t.replace(/<script[\s\S]*?<\/script>/gi, ' ')
         .replace(/<style[\s\S]*?<\/style>/gi, ' ')
         .replace(/<[^>]+>/g, ' ')
         .replace(/&[a-z]+;/gi, ' ')
         .replace(/\s+/g, ' ')
         .trim();
    return json({ text: t.slice(0, 4000) });
  } catch (e) {
    return json({ text: '' });
  }
}

// --- Trust Layer ---------------------------------------------------------
// A second-model claim-to-source check. Specialised judge for fact claims.
// Given the user's claim, the assembled rebuttal and the cited source text,
// it asks a small cheap model one yes/no question: does the answer trace to
// and match these sources? On "no" the client holds the rebuttal or attaches
// a caveat rather than surfacing a confident wrong answer.
//
// Contract: returns { verdict, reason }.
//   verdict "pass"    -> the answer is grounded in the cited sources.
//   verdict "fail"    -> the answer does not trace to or contradicts them.
//   verdict "unknown" -> no key configured, no sources to check, or the check
//                        itself failed. The caller surfaces the answer as is.
async function handleVerify(env, body) {
  const claim = (body.text || '').toString();
  const reply = (body.reply || '').toString();
  const sources = Array.isArray(body.sources) ? body.sources : [];

  // BYOK key wins, else the server-configured key. Never hardcoded.
  const apiKey = (body.anthropicKey || env.ANTHROPIC_API_KEY || '').toString().trim();

  // Graceful degradation: with no key or no sources there is nothing to check.
  if (!apiKey) {
    return json({ verdict: 'unknown', reason: 'no_key' });
  }
  if (!reply.trim() || sources.length === 0) {
    return json({ verdict: 'unknown', reason: 'nothing_to_check' });
  }

  // Build the cited source block from the snippets the answer was built on.
  const sourceBlock = sources.map((s, i) => {
    const label = [s.file, s.section].filter(Boolean).join(' ›');
    const snippet = (s.snippet || s.text || '').toString();
    return `[${i + 1}] ${label}\n${snippet}`;
  }).join('\n\n');

  const verifySystem = 'You are a strict fact-claim judge. You are given a user claim, ' +
    'a generated rebuttal and the source snippets the rebuttal was built from. ' +
    'Decide one thing only: do the factual statements in the rebuttal trace to and ' +
    'match these sources, or does the rebuttal assert facts the sources do not support ' +
    'or contradict? Be conservative: if the rebuttal leans on a specific number or fact ' +
    'that is absent from the sources, that is a mismatch. ' +
    'Reply with a single minified JSON object and nothing else, of the form ' +
    '{"match": true|false, "reason": "<=20 words"}.';

  const verifyUser = `USER CLAIM:\n${claim}\n\nGENERATED REBUTTAL:\n${reply}\n\n` +
    `CITED SOURCES:\n${sourceBlock}\n\n` +
    'Does the rebuttal trace to and match these sources?';

  try {
    const out = await callAnthropicHaiku(apiKey, verifySystem, verifyUser);
    const parsed = parseVerdict(out);
    return json({ verdict: parsed.match ? 'pass' : 'fail', reason: parsed.reason });
  } catch (err) {
    // The check must never break publishing. Fail open to "unknown".
    return json({ verdict: 'unknown', reason: 'check_failed' });
  }
}

// Pull a {match, reason} verdict out of the model text, tolerating prose
// around the JSON. Falls back to a keyword read if JSON parsing fails.
function parseVerdict(textOut) {
  const raw = (textOut || '').toString();
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start !== -1 && end > start) {
    try {
      const obj = JSON.parse(raw.slice(start, end + 1));
      return { match: obj.match === true, reason: (obj.reason || '').toString().slice(0, 200) };
    } catch (e) { /* fall through */ }
  }
  const lower = raw.toLowerCase();
  const match = /"?match"?\s*[:=]?\s*true|\byes\b/.test(lower) && !/\bno\b|false/.test(lower);
  return { match, reason: raw.slice(0, 200) };
}

async function callAnthropicHaiku(apiKey, systemPrompt, userPrompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: TRUST_MODEL,
      max_tokens: 128,
      temperature: 0,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })
  });

  if (!res.ok) {
    throw new Error('Anthropic verify HTTP ' + res.status);
  }

  const data = await res.json();
  const block = Array.isArray(data.content) ? data.content.find(c => c.type === 'text') : null;
  return block ? block.text : '';
}

async function callWorkersAI(env, systemPrompt, userPrompt) {
  const res = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.7,
    max_tokens: 2048
  });

  if (!res?.response) {
    throw new Error('Workers AI: keine Antwort');
  }

  return res.response;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' }
  });
}
