# sumrender.in

Personal portfolio of Sumrender Singh — full-stack software engineer. Built with [Astro](https://astro.build) as a fast, static, SEO-friendly single-page site, live at **[sumrender.in](https://sumrender.in)**.

## Quick Start

**Prerequisites:** Node.js `18.17.1` or `^20.3.0` (or higher, per [Astro's requirements](https://docs.astro.build/en/install-and-setup/#prerequisites)) and npm.

```bash
# 1. Clone the repo
git clone https://github.com/sumrender/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server at http://localhost:4321
npm run dev
```

That's it — the site reloads automatically as you edit files in `src/`.

### Production build

```bash
# Build the static site into dist/
npm run build

# Preview the production build locally
npm run preview
```

## Available Scripts

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start the Astro dev server (`localhost:4321`) |
| `npm run start`   | Alias for `npm run dev`                      |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Project Structure

```
/
├── public/              # Static assets served as-is (favicon, robots.txt, …)
├── src/
│   ├── components/      # UI components (sidebar)
│   ├── data/
│   │   └── data.js      # ✏️ Projects, experiences, social links — edit content here
│   ├── layouts/
│   │   └── Layout.astro # HTML shell, SEO meta tags & JSON-LD structured data
│   ├── pages/
│   │   └── index.astro  # The single page of the site
│   └── styles/
│       └── App.css      # Global styles
├── astro.config.mjs     # Astro config (site URL, sitemap integration)
└── package.json
```

## Editing Content

All page content (projects, experience entries, social links, resume link) lives in [`src/data/data.js`](src/data/data.js). Edit it and the page updates on save — no component changes needed.

## Deployment

The site is a fully static build (`npm run build` → `dist/`) deployed to **sumrender.in** via a Cloudflare Worker (`wrangler.toml`, `dist/` as `[assets]`; security + cache headers in `public/_headers`, copied to `dist/` at build time). The custom domain is configured in the Cloudflare dashboard, which also feeds canonical URLs, the sitemap, and structured data via the Astro `site` option in `astro.config.mjs`.

## Design Agent

This repo includes the [Impeccable](https://github.com/pbakaus/impeccable) design skill (`.agents/skills/impeccable/`, tracked in `skills-lock.json`) for AI-assisted design work on the UI. Project design context lives in `PRODUCT.md` / `DESIGN.md` once initialized via the skill.

