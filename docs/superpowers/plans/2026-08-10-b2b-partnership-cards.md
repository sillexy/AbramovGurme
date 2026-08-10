# B2B Partnership Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the B2B section as three rich partnership cards and update the section heading to «Партнёрство без риска».

**Architecture:** Keep the B2B section local to `src/app/page.tsx`. Add a small `BusinessIcon` SVG renderer and card metadata so text, metric and CTA stay together. Use scoped `.business-card*` CSS for desktop, tablet and mobile layouts without changing other sections.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS Grid, inline SVG.

## Global Constraints

- All card icons use copper `currentColor`, no fill, rounded joins and 1.5px strokes.
- Desktop renders three equal-height cards; tablet renders two columns; mobile renders one column.
- Preserve the current B2B descriptions and use «Партнёрство без риска» as the section heading.

---

### Task 1: Define and verify the card structure

**Files:**
- Modify: `tests/layout.test.ts`
- Modify: `src/app/page.tsx:95`

**Interfaces:**
- Produces: a `businessCards` metadata array with `title`, `text`, `metric`, and `cta` fields, consumed by the B2B section map.

- [ ] **Step 1: Write the failing source-level test**

```ts
assert.match(page, /<h2 id="business-title">Партнёрство без риска<\/h2>/);
assert.match(page, /const businessCards = \[/);
assert.match(page, /className="business-card"/);
assert.match(page, /<BusinessIcon index=\{index\} \/>/);
```

- [ ] **Step 2: Run the test and confirm it fails because the metadata and component do not exist**

Run: `node_modules/.bin/tsx.cmd --test tests/layout.test.ts`

Expected: the environment may stop before test discovery with `uv_os_get_passwd`; in that case run the equivalent source assertion with PowerShell and confirm the new selectors are absent.

- [ ] **Step 3: Implement the B2B metadata and markup**

```tsx
const businessCards = [
  ["Переосмысленная традиция", "Адаптация принципов домашней консервации для промышленного производства.", "", "Честная технология"],
  ["Без потерь", "Заявление бренда: стандартные списания 5-20% становятся нулевыми.", "5–20% → 0% списаний", "Ноль потерь"],
  ["Гибкий ассортимент", "Заявленные брендом преимущества в планировании, логистике, широте SKU и гибкости ценообразования.", "50+ SKU", "Широкая линейка"],
] as const;
```

Render each entry with a `BusinessIcon`, a title, a short divider, description, optional metric and a bottom CTA label.

- [ ] **Step 4: Re-run the source assertion and confirm it passes**

Run: a PowerShell check that requires `businessCards`, `BusinessIcon`, `business-card`, and the updated heading in `src/app/page.tsx`.

### Task 2: Style the cards and responsive grid

**Files:**
- Modify: `tests/layout.test.ts`
- Modify: `src/app/globals.css:187`

**Interfaces:**
- Consumes: `.business-card`, `.business-card__icon`, `.business-card__metric`, and `.business-card__cta` markup from Task 1.
- Produces: scoped B2B CSS that keeps CTA labels bottom-aligned.

- [ ] **Step 1: Write the failing source-level test**

```ts
assert.match(css, /\.business-grid\s*\{[^}]*grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
assert.match(css, /\.business-card\s*\{[^}]*display:flex;[^}]*flex-direction:column/);
assert.match(css, /\.business-card__cta\s*\{[^}]*margin-top:auto/);
```

- [ ] **Step 2: Run the source assertion and confirm it fails because the card selectors are absent**

Run: a PowerShell check for the three CSS selectors above.

- [ ] **Step 3: Implement the scoped CSS**

```css
.business-grid { display:grid; gap:28px; grid-template-columns:repeat(3,minmax(0,1fr)); }
.business-card { display:flex; min-height:496px; flex-direction:column; align-items:center; }
.business-card__cta { margin-top:auto; }
```

Add circular icon frames, a small divider, display-serif headings, copper metrics and outlined CTA labels. Add two-column and one-column breakpoints.

- [ ] **Step 4: Re-run the source assertion and confirm it passes**

Run: the PowerShell selector check from Step 2.

### Task 3: Validate type safety and visual layout

**Files:**
- Modify: none

**Interfaces:**
- Consumes: completed JSX and CSS from Tasks 1–2.

- [ ] **Step 1: Run TypeScript validation**

Run: `pnpm typecheck`

Expected: exit code 0.

- [ ] **Step 2: Capture the desktop B2B section**

Run: use Playwright CLI to open `http://localhost:3000/`, scroll `.business` into view and save a desktop screenshot.

Expected: three equally tall cards, readable copy, distinct icons and CTA labels aligned at the card bottoms.

- [ ] **Step 3: Capture the mobile B2B section**

Run: set the viewport to `390x844`, scroll `.business` into view and save a screenshot.

Expected: cards stack in one column and all text remains visible.
