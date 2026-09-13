# Amila Pathum — Portfolio

A Next.js (App Router, TypeScript) implementation of the Portfolio design
handed off from Claude Design (see `../README.md`, `../chats/`, and
`../project/Portfolio.dc.html` for the original design source).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

`npm run build` produces a production build; `npm start` serves it.

## Still needs real content

The design was handed off with placeholders that need your real details.
Everything below lives in `lib/content.ts` unless noted — edit that one
file and it flows through the whole site.

- **Contact email, GitHub, LinkedIn, Facebook, Instagram URLs** — currently
  generic placeholders (`hello@example.com`, `github.com`, `linkedin.com`,
  etc.) in `lib/content.ts` (`profile`, `socials`, `contactLinks`). Swap in
  your real handles/URLs.
- **Certifications** — `certifications` in `lib/content.ts` is empty on
  purpose (no fake credentials). Add entries as you earn them; the section
  keeps two "open slot" placeholder cards until you have at least two real
  ones.

## Structure

- `app/page.tsx` — assembles the page from the section components below.
- `components/` — one component per section (Header, Hero, StatsStrip,
  About, Skills, DevOpsPipeline, Projects, Journey, Certifications,
  Contact, Footer), plus shared bits (`icons.tsx`, `ScrollEffects.tsx` for
  the scroll-reveal/pipeline-bar animation).
- `app/globals.css` — design tokens (emerald/ink/paper palette, Archivo
  type) and all component styles.
- `lib/content.ts` — every piece of editable copy/links/data.
