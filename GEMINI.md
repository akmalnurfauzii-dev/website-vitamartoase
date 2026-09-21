# Workspace Guidelines & Rules

## 1. Form Validation & DOM Completeness (Frontend)
- Whenever client-side form validation is enforced (e.g. customer name, delivery address, phone number in checkout flows), the corresponding input fields must be fully rendered and accessible in the DOM.
- When performing string or regex replacements in single-file HTML, always verify post-replacement assertions to confirm that the markup in the target document was successfully updated.

## 2. Watermark & Background Typography Positioning (CSS/Layout)
- Decorative watermark text (e.g. large outline text like `DIRUMAH`, `OASE`) must never collide with or obscure foreground headings or content.
- Use `font-size: clamp(...)` to cap maximum font size on large desktop screens.
- Position watermarks in the opposite quadrant of headings (e.g. top-right when the heading occupies the left side).
- Never use negative `top` values if the container section has `overflow: hidden`, as it causes the top of the letters to be clipped flat.
