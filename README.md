# Bold Claim — Web

Frontend and Cloudflare Worker for the Bold Claim counter-speech assistant.

The assistant answers from a managed vector index at request time. This repository
contains only the web stack:

- `docs/index.html` — single-page frontend
- `docs/worker.js` — Cloudflare Worker (queries the vector index, calls the LLM)
- `docs/wrangler.toml` — Worker config
- `docs/guide/` — conversation guide

Deploy the Worker with `wrangler deploy`. The frontend is served via GitHub Pages from `docs/`.
