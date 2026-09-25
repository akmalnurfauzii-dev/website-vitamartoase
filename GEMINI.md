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

## 4. UI Restraint & Anti-Redundancy (Single FAB at Bottom-Right Only)
- The floating action button (FAB) at the bottom-right corner is the ONLY cart access point across ALL screen sizes (desktop, tablet, mobile).
- NEVER place or duplicate cart buttons in the top navbar, header, or mobile drawer. Keep header navigation focused exclusively on navigation anchors and a single direct CTA.

## 5. JavaScript Syntax & String Literal Integrity (Automated V8 Verification)
- When generating or interpolating dynamic HTML within JavaScript strings, never embed unescaped nested quotes (e.g. `style="font-family: 'Space Grotesk'..."` inside single-quoted JS strings). Use CSS custom properties or standard utility classes.
- Before staging and committing changes, all inline and external JavaScript blocks must be validated via an automated syntax parser (e.g. `node -c` or `new Function(script)`) to guarantee zero `SyntaxError` regressions that could break document-level event listeners.

## 6. Mobile Viewport & Anti-Zoomout Layout Shield
- Set viewport meta tag to `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">` to prevent mobile browsers from zooming out or scaling abnormally.
- Marquees, tickers, and transformed elements (`w-max`, `-rotate-1`) MUST be strictly contained inside an outer container with `overflow: hidden !important; width: 100% !important; max-width: 100vw !important;` to eliminate any horizontal overflow that could expand the layout viewport.
- Any fixed action element (such as the cart FAB) must account for mobile browser UI and gesture bars using `bottom: max(16px, env(safe-area-inset-bottom, 16px))` on mobile, `z-index: 99999`, and responsive sizing (`h-14 w-14 sm:h-16 sm:w-16`).
- Drawers/modals must use `display: none` when closed to prevent invisible ghost overlays from blocking touch events on mobile.

## 7. Dual-Brand Local SEO Alignment & Entity Preservation
- **Primary Physical Entity in Title:** For businesses with dual branding (e.g., physical store "Kedai Vitamart" + brand concept "Oase"), NEVER omit the primary physical/Google Business Profile entity name from high-weight SEO tags.
- **Front-Loaded Exact Match:** Always front-load the physical store keyword in the `<title>` tag:  
  `Kedai Vitamart (Oase x Vitamart) | [Services / Highlights]`.
- **Meta Description & Keywords:** Both the physical store name (`Kedai Vitamart`) and collaborative name (`Oase x Vitamart`) must appear in `<meta name="description">` and `<meta name="keywords">`.
- **Schema.org Entity Bridging:** In `LocalBusiness` JSON-LD, set the primary `"name"` to match the Google Business Profile (`Kedai Vitamart`), and use `"alternateName"` to list all collaborative variations (`["Kedai Vitamart & Oase", "Oase x Vitamart", "Kedai Vitamart Oase"]`).
- **Zero Visual Regression:** All SEO metadata enhancements must reside purely in `<head>` or existing structured elements without disrupting visual layout or UI components in `<body>`.

