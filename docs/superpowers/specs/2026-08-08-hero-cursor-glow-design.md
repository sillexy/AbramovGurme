# Hero Cursor Glow Design

## Goal

Add a subtle copper/gold glow that follows a mouse pointer only within the Hero section.

## Design

- A dedicated client component renders one decorative `span` inside `.hero`.
- Pointer coordinates animate toward the latest position with `requestAnimationFrame` easing.
- The element uses a large, blurred radial gradient at 5% opacity and remains behind Hero content.
- Leaving Hero fades the glow out; coarse-pointer and reduced-motion environments do not enable tracking.

## Verification

- Confirm the component is scoped to `.hero`.
- Confirm CSS clips the glow and uses the copper accent.
- Run type-check and production build.
