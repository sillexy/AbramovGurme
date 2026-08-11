# Footer Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the desktop footer match the compact second reference screenshot while preserving content and mobile behavior.

**Architecture:** Keep the existing JSX and contact data untouched. Make the layout change with scoped footer CSS: left-align the desktop contact grid to the existing `.shell`, tighten column/row spacing, reduce footer vertical padding, and preserve the existing mobile stack below 640px.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS.

## Global Constraints

- Keep current footer markup and contact data unchanged.
- Adjust only footer/contact CSS.
- Desktop contacts align with the left edge of `.shell`.
- Desktop contact columns sit closer together, matching the supplied reference.
- Footer becomes substantially more compact vertically.
- Divider and copyright remain centered below contacts.
- Mobile remains a single stacked column without horizontal overflow.
- Do not change contact text, phone numbers, links, icons, or semantics.

---

### Task 1: Compact and left-align the footer

**Files:**
- Modify: `src/app/footer-contacts.css`
- Modify only if needed for the outer footer padding/copyright spacing: `src/app/globals.css`

**Interfaces:**
- Consumes: existing `.site-footer`, `.site-footer__grid`, `.footer-contact`, `.copyright` classes from `src/app/page.tsx`.
- Produces: desktop footer layout matching the second reference while preserving the existing mobile media query.

- [ ] **Step 1: Capture the current CSS values**

Confirm that `src/app/footer-contacts.css` currently centers `.footer-contact` with `width: min(100%, 760px)` and `margin-inline: auto`, and that `src/app/globals.css` currently gives `.site-footer` `padding: 50px 0 32px`.

- [ ] **Step 2: Implement the desktop contact alignment**

In `src/app/footer-contacts.css`, change the desktop `.site-footer .footer-contact` rule to use a compact fixed content width and left alignment within `.shell`:

```css
.site-footer .footer-contact {
  --contact-line-gap: 8px;
  --contact-name-top: 22px;
  --contact-phone-top: 52px;
  display: grid;
  width: min(100%, 520px);
  margin-inline: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(36px, 5vw, 64px);
  row-gap: var(--contact-line-gap);
  justify-items: start;
  align-items: start;
}
```

Keep the existing icon backgrounds, labels, links, and mobile stacking behavior unchanged.

- [ ] **Step 3: Tighten the outer footer spacing**

In `src/app/globals.css`, change the footer/copyright spacing to:

```css
.site-footer {
  padding: 26px 0 18px;
  background: #080807;
  color: #d4cec5;
}

.site-footer__grid {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
}

.copyright {
  margin-top: 10px;
  padding-top: 12px;
  border-top: 1px solid rgba(216, 204, 187, .25);
  color: #938b81;
  font-size: .78rem;
  text-align: center;
}
```

Do not change unrelated footer or dialog CSS.

- [ ] **Step 4: Verify responsive constraints statically**

Check that the existing `@media (max-width: 640px)` rule still forces all contact items into `grid-column: 1` and that no new fixed width exceeds `100%`.

- [ ] **Step 5: Run project checks**

Run:

```bash
npm run typecheck
npm run lint
npm run build
```

Expected: all commands exit successfully.

- [ ] **Step 6: Review the diff**

Confirm the diff touches only:

```text
src/app/footer-contacts.css
src/app/globals.css
```

and contains no contact-content or JSX changes.

- [ ] **Step 7: Commit**

```bash
git add src/app/footer-contacts.css src/app/globals.css
git commit -m "style: compact footer to reference"
```
