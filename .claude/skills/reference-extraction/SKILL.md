---
name: reference-extraction
description: Extract exact computed styles, spacing, colors, and asset URLs from the reference site (https://airbnb-clone-umber-two.vercel.app) using a local Playwright script. Use when a visual value (padding, font size, color, animation duration) must be matched precisely rather than estimated from a screenshot.
---

# Reference extraction

The reference site blocks automated fetching (robots.txt), so extraction
must run from the developer's own machine with a real browser, not through
a server-side fetch tool.

## When to use
- Matching a spacing/size/color that screenshots alone can't pin down.
- Capturing hover/focus/animation timings for a component.
- Collecting image or font asset URLs.

## Procedure
1. Write a Playwright script (run locally with `npx playwright test` or
   `node script.js`) that opens the reference URL at a 1920x1080 viewport.
2. For each target element, dump `getComputedStyle()` for: `fontSize`,
   `fontWeight`, `color`, `padding`, `margin`, `gap`, `borderRadius`,
   `boxShadow`, `transition`.
3. Save results to `design-tokens.json` at the repo root — never paste raw
   values straight into components; map them to existing `@theme` tokens in
   `app/globals.css` first, and only add a new token if none fits.
4. Screenshot each state (default, hover, focus, modal open) into
   `reference-shots/` for later visual diffing.

## Rules
- Values come from the DOM, never from memory or assumption.
- Do not copy the reference's markup, class names, or source — extract
  measurements only. The assignment forbids lift-and-shift of the codebase.
