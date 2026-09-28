# Airbnb Listing Clone — Project Instructions

## What this is
A pixel-fidelity clone of a single Airbnb listing page (Listing Page, Photo
Tour, Lightbox) for the Playpower Labs take-home assignment. Desktop only.
Reference: https://airbnb-clone-umber-two.vercel.app

## Stack
- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4
- lucide-react for icons, next/image for images
- No backend — all content lives in `lib/listing-data.ts`
- Deploy target: Vercel (not yet deployed)

## Design system (Tailwind `@theme` tokens — use these, never hardcode hex)
Defined in `app/globals.css`:
- Colors: `rausch` (#FF385C, primary CTA), `rausch-dark`, `babu` (#222222,
  text), `foggy` (#717171, secondary text), `line` (#DDDDDD, borders),
  `line-soft` (#EBEBEB), `mist` (#F7F7F7, hover bg), `success`, `error`
- Type scale: `text-display` (32px headings), `text-section` (22px),
  `text-body` (15px, default paragraph size)
- Always reuse an existing token before introducing a new color or size.

## Conventions
- One component per listing section under `components/`, named for what it
  renders (`Highlights.tsx`, `BookingCard.tsx`, etc.) — not generic names.
- Data-driven: every section reads from `lib/listing-data.ts`. Never inline
  copy, prices, or counts directly in a component.
- `"use client"` only on components that need interactivity (state, event
  handlers, browser APIs). Static sections stay server components.
- Images: `next/image` with explicit `sizes`, never a bare `<img>` unless
  the source is an inline SVG/logo asset from `public/`.
- Accessibility is not optional: every icon-only button needs `aria-label`,
  every modal (Lightbox, Photo Tour) needs focus management on open and
  Escape-to-close, and interactive elements must be reachable and operable
  by keyboard alone.

## Before finishing any task
1. Run `npm run build` — must compile with zero TypeScript errors.
2. Check the change against the reference site's actual DOM/screenshot,
   not memory or assumption — spacing, color, and copy must match exactly.
3. Never leave a component that duplicates another component's section
   (this project has repeatedly hit bugs from two components independently
   rendering the same host card / rating row — always check whether a
   section already exists before adding it).

## Known project-specific gotchas
- `lib/listing-data.ts` uses `picsum.photos` placeholder images via an
  `img(seed)` helper — this is intentional, not a bug to fix.
- Section widths use inline `style={{ maxWidth: ... }}` rather than Tailwind
  arbitrary-value classes (`max-w-[1400px]`) in a couple of places, because
  the arbitrary-value class was observed not compiling reliably in this
  project's Turbopack setup. Match that pattern for any new full-width
  container rather than reintroducing the arbitrary class.
