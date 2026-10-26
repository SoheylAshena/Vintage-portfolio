# Vintage Portfolio

A portfolio built with the Next.js App Router, TypeScript, and CSS Modules.

## Getting started

This repository uses pnpm (see `pnpm-lock.yaml`). Install dependencies and start the development server:

```bash
corepack pnpm install
corepack pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project structure

```text
app/
  assets/vectors/   SVGs imported as React components
  components/       Shared visual and behavior components
  hooks/            Reusable React hooks
  sections/         Page sections and site chrome
  types/            Global TypeScript declarations
  about/page.tsx    About route
  contact/page.tsx  Contact route
  projects/page.tsx Projects route
  page.tsx          Home page composition
  layout.tsx        Root document and metadata
  globals.css       Global styles and design tokens
public/
  fonts/            Locally hosted font files
  images/           Images served from /images
  videos/           Videos served from /videos
```

The navbar uses the App Router routes `/projects`, `/about`, and `/contact`; their page files live in the matching `app/` directories. The shared navbar is rendered from the root layout. Use lowercase kebab-case for folders and static asset filenames. Keep reusable UI in `app/components`, page-level content in `app/sections`, and browser-served files in `public`. The `@/` alias points to `app/`.

## Commands

- `corepack pnpm dev` — start the development server
- `corepack pnpm build` — create a production build
- `corepack pnpm start` — serve the production build
- `corepack pnpm lint` — check source files with ESLint
- `corepack pnpm typecheck` — check TypeScript types
