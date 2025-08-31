# Project Overview: Research Blog Studio

## Vision & Goals
- **Clone Google Research Blog look/feel**: clean, academic-style design with card layouts, serif headings, and simple navigation.
- **Content editing via Puck**: use visual editor for creating/editing articles, sections, and layouts.
- **Persistence to GitHub**: edits auto-commit JSON content to the repo using the GitHub Contents API.
- **Local-first development**: managed through Codex CLI and Gemini CLI.
- **Extensible**: future support for article lists, categories, authors, and more.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS + typography plugin
- **Editor**: @measured/puck (slots API, demo-style layout)
- **Data**: JSON under `content/pages` and `content/articles`
- **Auth**: token gate for `/admin` via Next.js middleware
- **Dev Tools**: Codex CLI + Gemini CLI

## Key Requirements
1. Homepage (`/`) renders JSON content via `<Render config={puckConfig} data={...} />`
2. `/admin` provides demo-style Puck editor (components sidebar, preview, fields/outline)
3. API routes:
   - `GET /api/puck/load?path=...` → fetch JSON from GitHub
   - `POST /api/puck/save` → commit JSON to GitHub
4. `.env.local` holds secrets:
   - `ADMIN_TOKEN`
   - `GITHUB_CONTENT_TOKEN` (PAT with contents: read/write)
5. Codex CLI handles runbooks, migrations, and automation
6. Fallback logic in `app/page.tsx` if GitHub token is misconfigured

## Current Status
- Rocket.new integration **abandoned**
- Migrated from **Vite → Next.js**
- Vite deps/artifacts removed
- Puck + GitHub adapter implemented
- Seed content file present: `content/pages/home.json`

## Next Steps
- Verify `.env.local` with valid GitHub PAT and ADMIN_TOKEN
- Run `pnpm dev`, open http://localhost:3000/admin, authenticate, and publish
- Confirm commits appear in GitHub repo
- Build additional components for richer layouts (PostCard, Article listing)
- Expand content structure under `content/articles`
