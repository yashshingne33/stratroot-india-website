# StratRoot India

Marketing website for StratRoot India — an executive business consultancy helping manufacturers, traders, and family-owned businesses scale through operational, financial, and export-led transformation.

Built with React, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server & build tooling
- **React Router** — client-side routing
- **Tailwind CSS v4** — utility-first styling, theme driven by CSS custom properties
- **Lucide React** — icons

## Brand Palette

Theme tokens are defined in `src/index.css` under `@theme` and consumed via CSS variables (`var(--color-*)`) throughout the app.

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#102A43` | Deep navy — header, hero, dark sections |
| `--color-accent` | `#2F855A` | Export green — CTA buttons, growth accents, icons |
| `--color-surface` | `#F8FAF7` | Off-white — main background, light sections |
| `--color-charcoal` | `#1F2933` | Body copy, dark text |
| `--color-gold` | `#C6A15B` | Soft gold — small highlights, dividers, eyebrow labels |

## Project Structure

```
Stratroot India/
├── src/
│   ├── components/       # Shared components (Nav, Root layout, etc.)
│   ├── pages/             # Route-level page components
│   ├── index.css          # Theme tokens & global styles
│   └── router.tsx          # Route definitions
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Pages / Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/services/:slug` | Service Detail |
| `/industries` | Industries |
| `/case-studies` | Case Studies |
| `/case-studies/:slug` | Case Study Detail |
| `/insights` | Insights |
| `/insights/:slug` | Article Detail |
| `/contact` | Contact |
| `/consultation` | Consultation / Booking |
| `/privacy` | Privacy Policy |

## Getting Started

**Prerequisites:** Node.js 18+ and a package manager (npm, pnpm, or yarn).

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:8443)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview
```

> **Note:** This project currently has both `package-lock.json` and `pnpm-lock.yaml` in the repo. Pick one package manager and delete the other lockfile before pushing, to avoid dependency drift between contributors.

## Content Status

Homepage and navigation currently use placeholder/temporary content pending the client's final content handoff. Colors and structure are final per the brand guidelines provided; copy for some sections (Industries, Case Studies, Insights) is still placeholder and awaiting real content from the client.

## Deployment

_Add deployment instructions here once a hosting provider (Netlify, Vercel, etc.) is decided._

## License

_Add license here — private/proprietary unless otherwise specified._