#!/usr/bin/env node
// build.js — reads META/web-method.md, generates tactics.js for the worker bundle.
// Run: node build.js && wrangler deploy
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(resolve(__dirname, '../META/web-method.md'), 'utf-8');

// Strip YAML frontmatter and the H1 preamble; keep only the ## sections.
const stripped = raw.replace(/^---[\s\S]*?---\s*\n/, '');
const firstSection = stripped.indexOf('\n## ');
const content = firstSection !== -1 ? stripped.slice(firstSection + 1).trim() : stripped.trim();

const escaped = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const out = `// AUTO-GENERATED from META/web-method.md — do not edit directly.
// Regenerate: node build.js  |  Deploy: node build.js && wrangler deploy
export const METHOD_TACTICS = \`Du bist ein Fakten-basierter Debattenhelfer.

${escaped}\`;
`;

writeFileSync(resolve(__dirname, './tactics.js'), out);
console.log(`tactics.js updated (${content.length} chars from web-method.md)`);
