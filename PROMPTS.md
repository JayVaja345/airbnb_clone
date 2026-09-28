# AI-Assisted Development Log

Tooling: Claude (chat) for planning, generation, and debugging; Claude Code
subagents (see `.claude/agents/`) defined for review workflows.

## Workflow summary
1. **Task analysis** — pasted the assignment brief; asked for an
   implementation plan and a production-architecture outline before writing
   code.
2. **Reference capture** — the reference site blocks automated fetching, so
   I captured screenshots  of every state manually (listing page sections,
   Photo Tour, Lightbox) and fed them to the model as ground truth.
3. **Scaffold** — generated the Next.js + Tailwind project with one
   component per listing section, all reading from `lib/listing-data.ts`.
4. **Screenshot-diff iteration loop** — for each mismatch, I sent the
   reference screenshot alongside my own build's screenshot and asked for a
   targeted fix. When a fix didn't visibly land (e.g. container width), I
   checked the real DOM in browser DevTools instead of re-prompting blindly.
5. **Review agents** — after the UI was built, defined `fidelity-auditor`,
   `accessibility-reviewer`, `code-quality-reviewer`, and `component-builder`
   subagents (plus a `reference-extraction` skill) to separate review from
   generation for further iteration. These were written at the end of the
   project, not used during the initial build.

## Representative prompt sequence (condensed)
1. "Here is the take-home brief — tell me the architecture and
   implementation plan."
2. (Uploaded reference screenshots) "Build the listing page matching these."
3. "Booking card should read ₹X for 5 nights with no rating row or dropdown
   — match the second screenshot."
4. "Highlights shows the host card twice — remove the duplicate."
5. "Reviews should match this layout: leaf rating, category meters, filter
   pills, 2-column review grid." (screenshots attached)
6. "Reorder sections: Reviews → Location → Meet your host → Things to know →
   More stays nearby; remove the footer."
7. "Header: logo from uploaded SVG, search pill centered, no profile icon."
8. "Add a sticky sub-nav that fades in only after scrolling past the
   gallery, with scroll-spy underline across Photos/Amenities/Reviews/
   Location."
9. "Create the architecture diagram and subagent/skill configs."

## Debugging notes worth calling out
- **Silent-apply failures**: several fixes appeared not to work because the
  edited file hadn't saved or the dev server cache was stale. Resolved by
  clearing `.next`, re-saving, and checking DevTools computed styles rather
  than re-prompting the model with the same request.
- **Duplicate sections**: two components independently rendered the same
  host card and rating row. This led to the duplicate-detection rule in
  `code-quality-reviewer`.
- **Tailwind arbitrary-value class not applying** (`max-w-[1400px]`):
  switched to an inline `style` for those containers; documented in
  `CLAUDE.md`.
