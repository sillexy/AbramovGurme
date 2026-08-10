# B2B Partnership Cards Design

## Goal

Replace the existing B2B grid with the three-card presentation shown in the supplied reference, while retaining the current section’s content and changing the heading to «Партнёрство без риска».

## Visual direction

- Warm ivory section with a subtle central glow.
- Three equal cards on desktop, each with a soft border, restrained shadow, rounded corners and generous vertical rhythm.
- One copper line-icon in a circular frame per card: jar with branch, declining-loss chart, and product boxes.
- Display-serif titles, copper metric lines for the second and third cards, and outlined copper CTA labels at the bottom.
- SVG icons use `currentColor`, no fill, rounded joins and a 1.5px stroke.

## Layout and responsive behavior

- Desktop: three columns with equal card heights and bottom-aligned CTA labels.
- Tablet: two columns, then one column at the existing mobile breakpoint.
- The content stays in normal document flow; no absolute positioning or fixed dimensions that could cause text overlap.

## Content mapping

- Section title: «Партнёрство без риска».
- Card 1: «Переосмысленная традиция» / «Честная технология».
- Card 2: «Без потерь» / «5–20% → 0% списаний» / «Ноль потерь».
- Card 3: «Гибкий ассортимент» / «50+ SKU» / «Широкая линейка».

## Validation

- Source-level regression test confirms the title, card metadata and dedicated B2B card classes.
- `pnpm typecheck` must pass.
- Desktop and mobile browser screenshots must show readable text, aligned CTA labels, and no overflow.
