# Abramov Gurme — Codex implementation pack

This pack is the optimized replacement for feeding the full 1600+ line specification to Codex as its primary working context.

## Upload/use these files

Required:

- `00_CODEX_TASK.md`
- `01_BUILD_SPEC.md`
- `02_CONTENT_RU.md`
- `03_ASSETS_AND_RELEASE.md`
- `04_QA_CHECKLIST.md`

Also place the original `Abramov.pdf` in the Codex project/workspace if you have it. It is useful for extracting/recreating the real logo and documentary visuals.

## Recommended Codex workflow

1. Put all five Markdown files in the repository root or `/docs`.
2. Add `Abramov.pdf` to `/references/Abramov.pdf` or another obvious source folder.
3. Open `00_CODEX_TASK.md`.
4. Tell Codex:

   **“Follow 00_CODEX_TASK.md and implement the landing page. Treat the other files in this pack as authoritative. Do not restart discovery.”**

5. Let Codex implement and run its own checks.
6. Use `04_QA_CHECKLIST.md` for the final verification pass.

## Why the original long SPEC was split

The original specification repeated the same constraints across:

- information architecture;
- detailed sections;
- responsive rules;
- components;
- motion;
- QA;
- definition of done.

The optimized pack separates concerns instead:

- **TASK** = what Codex must do;
- **BUILD SPEC** = how the site must work/look;
- **CONTENT RU** = what the page must say;
- **ASSETS & RELEASE** = what visuals may be used and what blocks public release;
- **QA** = how to prove implementation quality.

This keeps critical details while reducing repeated context.

## Full SPEC

Keep the original `SPEC.md` as an archive/reference outside the main prompt context.

Do not ask Codex to reread it by default. Only use it if a real ambiguity remains after consulting the optimized pack.
