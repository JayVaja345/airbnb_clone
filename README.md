# Airbnb Listing Clone

Pixel-fidelity clone of an Airbnb listing page (Playpower Labs take-home).

## Stack
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react icons

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Structure
- `app/page.tsx` — assembles the listing page, owns lightbox/photo-tour state
- `components/` — one component per section (Header, Gallery, BookingCard,
  Amenities, BookingCalendar, Reviews, LocationMap, Lightbox, PhotoTour, ...)
- `lib/listing-data.ts` — all copy/data in one place; **images are
  `picsum.photos` placeholders** — swap for real assets from the reference
  site by replacing the `img()` helper or individual `src` values.

## Views implemented
1. **Listing page** — hero gallery, sticky sub-nav (tabs + price/Reserve
   appears on scroll), booking card, highlights, description, amenities,
   dual-month calendar, reviews, location map.
2. **Photo Tour** — full-screen, `?modal=PHOTO_TOUR_SCROLLABLE` in the URL
   (matches the reference's routing pattern), thumbnail nav + scrolling
   room sections.
3. **Lightbox** — full-screen single photo, prev/next buttons, ←/→ keyboard
   nav, Escape to close, focus management on open.

## Known gaps vs. reference (to close with real inspection)
- Exact spacing/typography/colors are approximated from screenshots, not
  computed CSS values — needs a pass against the live DOM for pixel parity.
- Guest-count dropdown, "Get 10% off" claim button, and calendar flexible-
  dates icon are visually present but not functionally wired.
- Images are placeholders.
