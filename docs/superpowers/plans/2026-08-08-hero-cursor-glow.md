# Hero Cursor Glow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an inertial pointer-following glow contained within the Hero.

**Architecture:** A small Client Component owns pointer listeners and updates CSS custom properties. Hero CSS handles all visual rendering, clipping, and accessibility media queries.

**Tech Stack:** Next.js 16, React 19, CSS.

## Global Constraints

- No dependency additions or layout changes.
- Disable interaction for coarse pointers and reduced motion.

---

### Task 1: Hero-only decorative glow

**Files:**
- Create: `src/components/HeroCursorGlow.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

- [ ] Add a client component that eases pointer coordinates and fades on leave.
- [ ] Render it as the first child of the Hero.
- [ ] Add clipped, low-opacity radial-gradient styling and motion/touch guards.
- [ ] Run `pnpm typecheck` and `pnpm build`.
