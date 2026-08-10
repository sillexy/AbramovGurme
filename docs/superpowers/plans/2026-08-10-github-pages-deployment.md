# GitHub Pages Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Automatically publish the static Next.js site to GitHub Pages for every push to `main`.

**Architecture:** GitHub Actions builds the existing static Next.js export and deploys the generated `out/` directory using GitHub's official Pages artifact and deployment actions. The application configuration remains unchanged because it already uses `output: "export"`.

**Tech Stack:** Next.js 16, pnpm, GitHub Actions, GitHub Pages.

## Global Constraints

- Deploy only for pushes to `main` and manual workflow dispatches.
- Publish the `out/` directory produced by `pnpm build`.
- Use `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`.
- Use minimum production permissions: `pages: write` and `id-token: write`.
- Do not add dependencies or modify application code.

---

### Task 1: Add the GitHub Pages workflow

**Files:**
- Create: `.github/workflows/deploy-pages.yml`
- Test: local workflow-structure inspection and production build.

**Interfaces:**
- Consumes: `package.json` scripts and static-export configuration in `next.config.ts`.
- Produces: a GitHub Actions workflow named `Deploy GitHub Pages` that uploads `out/` and deploys it to the `github-pages` environment.

- [ ] **Step 1: Add the workflow definition**

Create `.github/workflows/deploy-pages.yml` with a `push` trigger for `main`, `workflow_dispatch`, concurrency group `pages`, a `build` job that checks out the repository, configures Pages, enables pnpm, uses Node 22 with pnpm cache, runs `pnpm install --frozen-lockfile` and `pnpm build`, then uploads `out/`. Add a `deploy` job that depends on `build` and runs `actions/deploy-pages@v4`.

- [ ] **Step 2: Validate the static build**

Run: `pnpm build`

Expected: command exits with status `0` and writes `out/index.html`.

- [ ] **Step 3: Validate deployment inputs**

Run: `Test-Path out/index.html; Get-Content -Raw .github/workflows/deploy-pages.yml`

Expected: `True`, and the workflow contains the required Pages actions, branch trigger, and `path: ./out`.

- [ ] **Step 4: Commit the deployment configuration**

Run:

```powershell
git add .github/workflows/deploy-pages.yml docs/superpowers/plans/2026-08-10-github-pages-deployment.md
git commit -m "ci: deploy site to GitHub Pages"
```

Expected: a commit containing the workflow and its implementation plan.
