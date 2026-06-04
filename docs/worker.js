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

// Trust Layer model: a small cheap Anthropic model used once on the final
// answer to confirm the claim traces to and matches the cited source.
const TRUST_MODEL = 'claude-haiku-4-5';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MODE_PROMPTS = {
  reply: `Du bist ein Fakten-basierter Debattenhelfer. Der User hat einen Kommentar kopiert, auf den er antworten will.
Analysiere den Kommentar: Welche Behauptungen werden aufgestellt? Welche rhetorischen Tricks werden verwendet?
Nutze die bereitgestellten Konter-Daten um eine fundierte, quellenbasierte Antwort zu generieren.
Schreibe für die stillen Mitleser, nicht für den Kommentator.`,

  thread: `Du bist ein Thread-Analyst. Der User hat einen kompletten Diskussions-Thread kopiert.
Erstelle eine Analyse:
1. Welche Behauptungen tauchen auf?
2. Welche Kommentare sind Bait (ignorieren)?
3. Welche Kommentare sind es wert, beantwortet zu werden?
4. Für die Top-3 lohnenswerten Kommentare: Schlage jeweils einen Konter vor.`,

  prep: `Du bist ein Briefing-Ersteller. Der User beschreibt eine bevorstehende Situation (Familienessen, Stammtisch, etc.).
Erstelle ein Briefing:
1. Wahrscheinliche Behauptungen die kommen werden
2. Beste Konter für MÜNDLICHE Gespräche (kürzer, empathischer als online)
3. De-eskalations-Punkte
4. Exit-Strategien wenn es eskaliert`,

  drill: `Du bist ein Debate-Trainer. Spiele einen aggressiven Gegner.
Generiere eine realistische Behauptung basierend auf dem gewählten Archetyp.
Wenn der User antwortet, bewerte:
- Faktengenauigkeit (hat er die richtigen Daten?)
- Quellennutzung (hat er Quellen genannt?)
- Tonfall (überzeugend für Mitleser?)
- Verbesserungsvorschlag mit Verweis auf passende Konter-Dateien`,

  redteam: `Du bist ein Red-Team-Analyst. Der User hat seinen EIGENEN Antwort-Entwurf eingefügt.
Finde jede Schwäche:
1. Wo könnte der Gegner kontern?
2. Welche Quellen sind veraltet oder schwach?
3. Welche Formulierungen klingen herablassend?
4. Was würden stille Mitleser denken?
Schlage eine verbesserte Version vor.`,

  deescalation: `Du bist ein De-eskalations-Experte. Ziel ist NICHT gewinnen, sondern beruhigen.
Der Kommentar kommt von jemandem, mit dem der User eine Beziehung hat (Familie, Freund, Kollege).
Erstelle eine Antwort die:
1. Die Emotion validiert (nicht die Fakten)
2. Sanft auf Fakten hinweist ohne Angriff
3. Einen Off-Ramp bietet
4. Die Beziehung schützt`,

  factcheck: `Du bist ein reiner Faktencheck-Bot. Keine Rhetorik, keine Zingers.
Für jede Behauptung im Kommentar:
- Bewertung: Wahr / Teilweise wahr / Irreführend / Falsch
- Korrekte Fakten mit Zahlen
- Quelle mit Link
Kein Kommentar, keine Meinung. Nur Fakten.`,

  deconstruct: `Du bist ein Meister der sokratischen Dekonstruktion (Widerspruchsfalle). Nicht Fakten-first.
Der User hat einen Kommentar kopiert. Deine Aufgabe: finde, wo der Gegner zwei Positionen gleichzeitig hält, die sich gegenseitig kassieren, und lege sie offen, sodass er es selbst merkt.

Vorgehen:
1. Identifiziere im Kommentar zwei Aussagen oder eine Aussage plus eine implizite Forderung, die im Widerspruch stehen (z.B. "0% Wachstum ist eine Katastrophe" UND "schiebt ein Viertel der Erwerbstätigen ab"; oder "die sollen arbeiten" bei Leuten mit Arbeitsverbot).
2. Schreibe EINE Antwort nach diesem Muster:
   - Scheininteresse-Opener ("Ah, interessant." / "Verstehe ich dich richtig?"), trocken, nicht überzogen-sarkastisch.
   - Seine zwei Positionen wortnah nebeneinander.
   - Die Zange als AUSSAGE, nicht als Bittfrage. Ende: "Eins von beidem musst du aufgeben." oder ähnlich.
   - Genau EINE harte Zahl als Nachschlag, aus den Konter-Daten, nicht als Eröffnung.
3. Regeln: nur EIN Widerspruch (nicht stapeln). Seine Worte, nicht deine Interpretation. Kein Dauer-Nachbohren (kein Sealioning). Niemals mehr als der Gegner schreiben.

Wenn KEIN echter Selbstwiderspruch im Kommentar steckt, sag das ehrlich und schlage stattdessen einen normalen Konter vor. Erfinde keinen Widerspruch.
Schreibe für die stillen Mitleser. Sprache des Inputs. Plain text, keine Quellen-Liste am Ende (Zahl inline einweben).`
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
      const systemPrompt = MODE_PROMPTS[mode] || MODE_PROMPTS.reply;
      const contextBlock = konters.length > 0
        ? 'Relevante Konter-Daten aus der Datenbank:\n\n' +
          konters.map((k, i) => {
            const label = [k.file, k.section].filter(Boolean).join(' › ');
            return `[${i+1}] (${label}) ${k.text}`;
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

async function searchPinecone(env, query) {
  const host = env.PINECONE_HOST.startsWith('https://') ? env.PINECONE_HOST : `https://${env.PINECONE_HOST}`;
  const res = await fetch(`${host}/records/namespaces/default/search`, {
    method: 'POST',
    headers: {
      'Api-Key': env.PINECONE_API_KEY,
      'Content-Type': 'application/json',
      'X-Pinecone-API-Version': '2025-01'
    },
    body: JSON.stringify({
      query: { inputs: { text: query }, top_k: 5 },
      fields: ['text', 'file', 'section']
    })
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.result?.hits || []).map(h => ({
    text: h.fields?.text || '',
    file: h.fields?.file || '',
    section: h.fields?.section || '',
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
    return { source: k.section || '', snippet, score: k.score };
  });

  // grounding context: the full source text goes into the system prompt only.
  const contextBlock = hits.length
    ? 'Relevante Konter-Daten aus der Bold-Claim-Datenbank. Nutze sie als Faktenbasis, erfinde nichts dazu und beziehe dich auf die Quellen:\n\n' +
      hits.map((k, i) => `[${i + 1}] (${k.section || 'Quelle'}) ${k.text}`).join('\n\n')
    : 'Keine spezifischen Konter in der Datenbank gefunden. Antworte vorsichtig und nur auf Basis gesicherten Allgemeinwissens.';

  const platformNote = platform ? `Plattform: ${platform}. Passe Länge und Ton an.` : '';
  const toneNote = tone ? `Tonfall: ${tone}.` : '';
  const langNote = lang === 'en' ? 'IMPORTANT: Respond entirely in English; translate any German sources inline.' : '';

  const systemPrompt = `${MODE_PROMPTS.reply}

${platformNote} ${toneNote} ${langNote}

${contextBlock}`;

  return json({ docs, systemPrompt });
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
