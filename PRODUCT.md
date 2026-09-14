# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Sumrender Singh for full-time software engineering roles. Secondary: startup founders / freelance clients needing MERN-stack and backend work. Tertiary: peers and Web3/OSS community for network credibility.

Situation: scanning the portfolio in under a minute on desktop or mobile, looking for proof of real shipped work, backend depth, and a credible contact path.

## Product Purpose

Personal portfolio of Sumrender Singh — full-stack software engineer. It must make hiring intent obvious within seconds, prove capability with real projects and experience, and convert interest into contact (mailto + GitHub/LinkedIn/resume).

Success: a recruiter or client reaches out via email or social links after seeing projects and experience.

## Positioning

Backend-leaning MERN engineer (Node, Express, MongoDB, React) with real internship experience (MS Engage, Codinova, Kogniti) and Web3/Solidity exploration — code-first proof over visual claims. Every project links to a real repo or demo.

## Operating Context

Static single-page site at sumrender.in (Astro 5 static build, GitHub Pages). Content lives in `src/data/data.js` (projects, experiences, links). Contact via `mailto:sumrenders@gmail.com`. No backend, no blog CMS, no fake testimonials.

## Capabilities and Constraints

- Astro static, no UI framework; keep build `npm run build` → `dist/` green and deployable to GitHub Pages.
- Preserve: name Sumrender Singh, real bio, 6 projects, 3 experiences, social/resume links, SEO meta + JSON-LD + sitemap.
- Undecided: exact stats numbers, tools list, whether to add a contact form (mailto fallback required), portrait treatment.
- Accessibility: semantic landmarks, keyboard-focusable nav/cards, alt text on images, 4.5:1 body contrast on dark bg.

## Brand Commitments

- Name and identity: Sumrender Singh, full-stack / backend-leaning engineer.
- Reference binding: layout and composition inspired by https://sawad.framer.website/ (hero + profile card + stats + color cards + grids). Not a copy: copy, numbers, and proof remain Sumrender's own.
- Existing assets: `src/assets/1.jpg` (portrait), project screenshots via remote URLs in data.js.

## Evidence on Hand

- Projects (`src/data/data.js`): stipend-sort-internshala, playlist-gen, FaceUP, BikeChain, Booklists, ChatsApp — each with desc, stack, repo link, some with live demo.
- Experience: MS Engage Mentee (Jun–Jul 2022), Codinova Technologies (Jan–Mar 2022, NestJS/Jest), Kogniti (Mar–Apr 2023, MERN + MUI).
- Links: github.com/sumrender, linkedin/in/sumrendersingh, twitter @sumrenders, Google Drive resume.
- No blog posts, no client logos, no testimonials on hand — do not fabricate.

## Product Principles

1. Proof over polish: every claim links to a repo, demo, or date.
2. One-minute hire test: role, stack, and best proof visible without scrolling far.
3. Keep it static and fast: no backend, no heavy JS, images lazy except hero.
4. Honest numbers only: stats derive from data.js, never invented.
5. Contact is one click: mailto + socials always reachable (nav, hero, footer).
