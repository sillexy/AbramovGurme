# CODEX TASK — Build the Abramov Gurme landing page

## Goal

Implement the complete responsive Russian-language landing page for **«Абрамов Гурме»**.

Do not reopen business/content discovery. The decisions are already made.

Read these files in order:

1. `01_BUILD_SPEC.md` — implementation, design, structure, behavior.
2. `02_CONTENT_RU.md` — public-facing Russian copy and fixed values.
3. `03_ASSETS_AND_RELEASE.md` — visual asset rules and release gates.
4. `04_QA_CHECKLIST.md` — definition of done.

If `Abramov.pdf` is available in the project, use it as a source for visual extraction/reference only and to verify source fidelity. Do not invent facts that are absent from the approved files.

## Working rules

- Implement the site now; do not produce another specification.
- Do not ask another business questionnaire.
- If a minor implementation detail is unspecified, choose the simplest solution consistent with the design system.
- Do not invent prices, products, legal data, delivery terms, addresses, social accounts, ordering flows, certifications, or business facts.
- Do not reinterpret or scientifically reconcile brand claims.
- If an approved documentary visual is unavailable, use a typography-led or neutral branded fallback rather than unrelated stock.
- Do not introduce `Abramov.food` into navigation, metadata, brand naming, or URLs.
- Do not add forms, CRM, checkout, booking, messengers, CMS, database, API, authentication, or unnecessary third-party scripts.
- Do not use shadcn/ui or Framer Motion unless a concrete implementation problem genuinely requires them and you document why.
- Prefer semantic HTML, static/server-rendered content, CSS transitions, and minimal client JavaScript.

## Required stack

- Next.js — current stable version available in the environment.
- TypeScript — strict mode.
- Tailwind CSS.
- CSS custom properties for design tokens.
- Next.js image/font optimization.
- Static generation wherever possible.

## Delivery behavior

Build the full page in the approved order and implement:

- sticky compacting header;
- anchor navigation;
- accessible mobile menu;
- hero CTAs;
- five product directions;
- micromarket section;
- accessible contact dialog:
  - desktop: anchored popover-style presentation;
  - mobile: bottom sheet;
  - same semantic content tree;
- direct `tel:` and `mailto:` links;
- native `<details>/<summary>` technology disclosure;
- restrained once-only reveals;
- `prefers-reduced-motion`;
- responsive layouts down to 320 CSS px;
- Russian metadata draft;
- progressive fallback so core content and final contact work without JavaScript.

## Implementation priority

1. Source fidelity.
2. Visual quality and hierarchy.
3. Responsive behavior.
4. Accessibility.
5. Performance.
6. Motion polish.

## Verification before you say the work is finished

Run the available project checks, including at minimum:

- production build;
- TypeScript/typecheck;
- lint;
- automated tests if present;
- browser/runtime smoke test;
- check no console errors;
- verify every anchor;
- verify phone/email links;
- verify 320px layout has no horizontal overflow;
- verify keyboard interaction for mobile menu, dialog, and disclosure;
- verify reduced-motion behavior.

If browser/Lighthouse tooling is available, also verify the targets in `04_QA_CHECKLIST.md`.

## Important release distinction

A working staging implementation may be completed with the documented TBD items unresolved.

Do **not** represent the site as cleared for public production release until:

1. publication rights for production imagery are verified;
2. required documentary/legal review of public health, safety, shelf-life, nutrient, write-off, margin, payback, and rollout claims is recorded;
3. production domain/canonical/indexing settings are confirmed.

At completion, report:

- what was implemented;
- commands/checks run and their results;
- any remaining TBD/release-gate items;
- any assets that still need approved production originals.
