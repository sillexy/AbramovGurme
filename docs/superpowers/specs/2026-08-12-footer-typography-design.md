# Footer typography adjustment

## Goal
Make the footer contact typography more compact and consistent with the supplied screenshot.

## Changes
- Keep `ГЕНЕРАЛЬНЫЙ ДИРЕКТОР` on one line on desktop using `white-space: nowrap`.
- Reduce contact names and phone numbers from `1rem` to `0.72rem`, matching the job-title font size.
- Keep current colors, weights, icons, links, layout, and mobile stacking unchanged.
- Do not modify contact text or JSX.

## File
- `src/app/footer-contacts.css`

## Acceptance criteria
1. `ГЕНЕРАЛЬНЫЙ ДИРЕКТОР` stays on one line on desktop.
2. `Артур Аслаев`, `Ирина Фалева`, and both phone numbers render at `0.72rem`.
3. Roles remain visually distinguished by their existing uppercase styling and font weight.
4. No mobile overflow or content changes are introduced.
