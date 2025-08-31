# Research Blog Studio

## Overview
Research Blog Studio is a Next.js 15 (App Router) + TailwindCSS project designed to **clone the Google Research Blog look/feel** while providing a **visual editor powered by Puck**.
All content is stored as JSON in `content/pages` and `content/articles`, and persisted to GitHub via the GitHub Contents API.

Originally this project started with Rocket.new + Vite, but has since migrated fully to **Next.js** with **Codex CLI** and **Gemini CLI** for local-first development.

---

## Quick Links

- [Project Overview](docs/PROJECT_OVERVIEW.md) — goals, tech stack, requirements, current status
- [TL;DR](docs/TLDR.md) — short summary for Codex prompts
- [Runbook (Codex)](docs/docs_RUNBOOK_codex.md) — canonical step‑by‑step guide


---

## Development Workflow

### Prereqs
- Node.js 18+
- `pnpm` package manager
- Codex CLI + Gemini CLI

### Setup
```bash
pnpm install
cp .env.local.sample .env.local
# Fill in ADMIN_TOKEN and GITHUB_CONTENT_TOKEN
pnpm dev
```

### Key Endpoints
- `/` → renders homepage content from GitHub JSON
- `/admin` → Puck editor (requires ADMIN_TOKEN auth cookie/header)

---

## License
Private project — all rights reserved.
