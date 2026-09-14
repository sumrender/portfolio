# Design

<!-- impeccable:design-schema 1 -->

## Visual World

Dark gallery wall (`#0e0e0e`) with one white portrait card and two saturated signal cards (rust orange, signal lime). Grotesk display voice: extra-bold uppercase headlines at tight tracking; quiet gray body copy; oversized numerals as proof. Rounded 20px surfaces, floating pill chrome, crisp geometric SVG linework — no glass, no gradients-as-decoration, no emoji-as-icons.

Direction contract (code-led): first viewport = two-column hero (white profile card left ~380px, SOFTWARE / FULL-STACK headline + honest stats + two color cards right). Signature interaction: stats count up once on view + card arrow nudges on hover. Approved scope: inspired adaptation of sawad.framer.website composition; all copy/numbers Sumrender's own.

## Tokens

- `--bg: #0e0e0e` page; `--panel: #161616` nav/footer lines `#232323`; `--ink: #f5f4f0`; `--muted: #a3a3a3`; `--faint: #33302e` (giant second headline line; 3.5:1+ as decorative large text only, never body).
- `--card: #ffffff`; `--card-ink: #101010`; `--card-muted: #6f6f6f`.
- `--rust: #e0682a`; `--rust-deep: #b34e18`; `--rust-ink: #fff7f0`.
- `--lime: #d7f651`; `--lime-ink: #141a05`.
- Display: "Archivo" 800/900 + system fallbacks for all body text (no second webface — keeps the interface distinctive and the payload small). Headlines uppercase, letter-spacing -0.03em, line-height 0.95. Hero display intentionally one step smaller (`clamp(2.2rem, 5.5vw + 1rem, 5.2rem)`) so the right column compresses to the white card's height; section heads `clamp(1.9rem, 4vw, 3rem)`. Mono labels: "Roboto Mono" retained for small eyebrows/pills only.
- Radii: cards 20px, pills 999px, inner media 16px. Borders: 1px `#262626` on dark cards; none on white card (soft offset shadow instead).
- Focus ring: 2px solid var(--lime) offset 3px on dark; rust on light.

## Design System

Centralized in `src/styles/design-system/` (`tokens.css` — single `:root`
truth; `utilities.css` — `.wrap/.display/.section-*`; `README.md` — usage
table). Shared primitives in `src/components/ui/`: `ArrowIcon` (right /
up-right), `Pill` (outline stack tags / lime date badges), `PillLink`
(repo/demo links), `CtaButton` (rust primary CTA), `SectionHead` (title +
lede). `App.css` holds base elements / shell / scrollbar only; all
component color, radius, shadow, and duration values resolve to tokens.
Portrait duotone wash intentionally stays local (photographic blend, not a
brand token).

## Components

- TopNav: fixed floating pill, `#171717` at 92% opacity + backdrop blur (functional, over content), 5 SVG icon links (home/projects/experience/tools/contact) with labels on ≥720px, icons only below.
- ProfileCard: white, portrait 4:5 with rust duotone wash, dashed SVG trail + flame dot badge, name Archivo 800, role line, social row in rust (drawn SVG: GitHub/LinkedIn/X/resume).
- Stats: 3 columns, tabular numerals, count-up via IntersectionObserver, one authored motion moment for the page.
- HighlightCard rust/lime: flat color, geometric line pattern (zigzag / contour) at 8% ink, title Archivo 700 uppercase, bottom-right pill arrow button.
- ProjectCard: dark `#161616` card, 16:10 image, title, desc, stack pills, repo/demo links.
- ExperienceRow: date pill + name + desc, divided by 1px lines; section head pairs giant count with list.
- ToolsGrid: 6 dark cells, name + one-line desc.
- Contact CTA: giant "LET'S WORK TOGETHER" + mailto button + socials; footer baseline.
