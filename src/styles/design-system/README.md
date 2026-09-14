# Design System

Single source of truth for the portfolio visual world (Impeccable `extract`).

## Tokens — `src/styles/design-system/tokens.css`

One `:root` block. Every color / radius / shadow / duration in a component
resolves to a token here. Rules:

- Add a token only when it names a brand surface **and** is used in 3+ places
  (or names a semantic role like `--line-strong` shared across components).
- One-off values stay in component scope.
- `--faint` is decorative only (giant display lines) — never body copy.
- Shadows carry offset + blur (`--shadow-float`, `--shadow-card`) — never
  zero-offset halos.

Key roles: `--bg / --panel / --line / --line-strong` (dark surfaces),
`--chrome-rgb / --chrome-line` (floating nav pill),
`--ink / --ink-soft / --muted` (text on dark),
`--card / --card-ink / --card-muted` (white card),
`--rust(+deep/ink/line/wash) / --lime(+ink/line)` (brand),
`--radius-sm/md/lg/pill`, `--shadow-*`, `--dur-fast/med`, `--wrap`.

## Utilities — `src/styles/design-system/utilities.css`

Global classes components may rely on: `.wrap`, `.display`,
`.section-head`, `.section-sub`, `.page-section`, `.section-anchor`.
Nothing else is global — component styles are scoped.

## Components — `src/components/ui/`

| Component      | Use when                                     | Don't use when                          |
| -------------- | -------------------------------------------- | --------------------------------------- |
| `ArrowIcon`    | Any link/button arrow (`right`, `up-right`)  | Standalone illustration                 |
| `Pill`         | Stack tags (`outline`), date badges (`lime`) | Full buttons — use `PillLink`/`CtaButton` |
| `PillLink`     | Repo/demo links, secondary actions           | The primary CTA — use `CtaButton`       |
| `CtaButton`    | The one conversion action (`rust`)           | Secondary actions — use `PillLink`      |
| `SectionHead`  | Every section title + lede                   | Hero (custom display composition)       |

`class` passthroughs are layout-only (margins) — never restyle a shared
component from outside.

## Wiring

`Layout.astro` imports `tokens.css` + `utilities.css` (order: tokens first).
`App.css` keeps only base element styles, shell, scrollbar, legacy helpers
— no `:root`, no section classes.

## Migration record

Extracted from the 7 section components with zero visual change: hard-coded
hex/radii/shadows/durations → tokens; 3 arrow SVGs → `ArrowIcon`; stack tags
+ date badges → `Pill`; repo/demo links → `PillLink`; mailto CTA → `CtaButton`;
section titles → `SectionHead`. ProfileCard socials keep their own markup
(used once, rust-wash hover is context-specific).
