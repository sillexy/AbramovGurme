# Footer layout adjustment

## Goal
Match the desktop footer layout to the second reference screenshot while preserving the existing content and mobile behavior.

## Scope
- Keep the current footer markup and contact data unchanged.
- Adjust only footer/contact CSS.
- Align the two contact columns with the left edge of the main `.shell` instead of centering the contact block.
- Reduce the horizontal gap between the two contact columns to match the reference.
- Reduce top/bottom footer padding and vertical spacing between contact rows.
- Keep the divider and copyright centered beneath the contacts, with proportions matching the reference.
- Preserve the current stacked mobile layout below 640px.

## Implementation target
Primary file: `src/app/footer-contacts.css`.
A small footer spacing override may be added in `src/app/globals.css` only if necessary.

## Acceptance criteria
1. On desktop, the left contact starts at the left edge of the content shell.
2. The second contact sits visibly closer to the first, like the reference screenshot.
3. Footer height is substantially reduced and visually matches the compact reference.
4. Divider/copyright remain centered and do not overlap contact content.
5. Mobile layout remains a single stacked column without horizontal overflow.
6. No contact text, phone numbers, links, icons, or semantics are changed.
