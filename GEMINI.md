# Workspace Guidelines & Rules

## 1. Form Validation & DOM Completeness (Frontend)
- Whenever client-side form validation is enforced (e.g. customer name, delivery address, phone number in checkout flows), the corresponding input fields must be fully rendered and accessible in the DOM.
- When performing string or regex replacements in single-file HTML, always verify post-replacement assertions to confirm that the markup in the target document was successfully updated.

## 2. Drawer / Modal Layout: Unified Scroll Container & Sticky Bar
- In bottom sheets or drawers containing both an items list and a multi-field checkout form, never split them into competing flex scroll containers (`overflow-y-auto` on both).
- Use a single unified scroll container (`#cart-scroll-body` with `flex-1 overflow-y-auto`) containing both the item cards and the checkout form.
- Keep the primary call-to-action button in a fixed sticky bottom bar (`shrink-0`) pinned to the base of the modal so it is always accessible and visible without ever squishing or cropping the item cards.

## 3. Watermark & Background Typography Positioning (CSS/Layout)
- Decorative watermark text (e.g. `DIRUMAH`, `OASE`) should maintain grand visual scale (`clamp(4rem, 11.5vw, 9.5rem)`) to preserve the luxury editorial aesthetic.
- Position the watermark anchored high at the top boundary (`top-0 sm:top-1 right-1 sm:right-4`) with `z-index: 0` so it is not clipped by `overflow: hidden`.
- Assign `relative z-10` to the foreground `SectionHeading` container to ensure foreground text is crisp, prominent, and never obstructed by background strokes.
