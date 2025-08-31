# RUNBOOK — Codex CLI: Research Blog Studio (Next.js + Puck + GitHub)

Use this runbook with **Codex CLI** from the root of the repo.  
It maintains a pure **Next.js** setup, wires **Puck**, and enables **GitHub JSON commits**. All steps are idempotent.

---

## 0) Preconditions
- Node 18+ and `pnpm`
- GitHub PAT with **Contents: Read and write** for `bklapholz/research_blog_studio`

---

## 1) Convert to Next.js & clean Vite
```bash
#!/usr/bin/env bash
set -euo pipefail

test -f package.json || { echo "Run in repo root"; exit 1; }

pnpm remove vite @vitejs/plugin-react vite-tsconfig-paths || true
rm -f vite.config.mjs index.html || true

cp package.json package.json.bak.$(date +%s)
node - <<'NODE'
const fs = require('fs');
const p = JSON.parse(fs.readFileSync('package.json','utf8'));
p.scripts = { dev: "next dev", build: "next build", start: "next start" };
if (p.devDependencies) {
  delete p.devDependencies.vite;
  delete p.devDependencies['@vitejs/plugin-react'];
  delete p.devDependencies['vite-tsconfig-paths'];
}
fs.writeFileSync('package.json', JSON.stringify(p, null, 2));
console.log('Updated package.json scripts -> Next.js');
NODE

pnpm install
pnpm approve-builds || true
```

---

## 2) Environment variables
Create `.env.local` (do not commit):
```bash
cat > .env.local <<'ENV'
ADMIN_TOKEN=REPLACE_ME_strong_random

GITHUB_OWNER=bklapholz
GITHUB_REPO=research_blog_studio
GITHUB_BRANCH=main
GITHUB_CONTENT_TOKEN=REPLACE_ME_PAT_with_repo_contents

GITHUB_COMMIT_AUTHOR_NAME=Local Bot
GITHUB_COMMIT_AUTHOR_EMAIL=bot@local.dev
ENV
```

---

## 3) Structure (idempotent)
```bash
mkdir -p app app/api/puck/load app/api/puck/save lib/puck content/pages
```

---

## 4) Puck + GitHub adapter core files
(See repo `lib/puck/config.tsx`, `lib/github.ts`, `app/api/puck/*`, `app/admin/page.tsx`, `app/page.tsx` — already included in this project.)

---

## 5) Start Dev
```bash
pnpm dev
```
Open `/admin` (set cookie `ADMIN_TOKEN=<value>`) → Publish → creates/commits `content/pages/home.json`  
Open `/` to render the JSON.

---

## Appendix: Extended Setup Guide (Codex/Gemini)

- Full setup instructions for local dev and GitHub commit adapter.
- Mirrors the editor to the Puck live demo layout.
- See the original extended guide content embedded previously.
