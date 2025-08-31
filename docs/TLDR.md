# TL;DR — Research Blog Studio

Goal: Clone the **Google Research Blog** style using **Next.js + TailwindCSS**, with a **visual editor (Puck)** that persists content as JSON in GitHub.

- Framework: Next.js 15 (App Router)  
- Editor: @measured/puck (demo-style UI)  
- Data: JSON under `content/pages` and `content/articles`, committed via GitHub Contents API  
- Auth: token gate (`ADMIN_TOKEN`) for `/admin`  
- Dev workflow: Codex CLI + Gemini CLI (local-first, no Rocket.new)  
- Status: migrated from Vite → Next.js; Puck + GitHub adapter working

Usage:
- `pnpm dev` → run Next.js
- `/admin` → edit/publish (commits JSON to GitHub)
- `/` → renders content from committed JSON

Next: expand components, add blog listing, confirm PAT scope `contents: read & write`.
