# PoE Companion

A comprehensive Path of Exile companion web application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **📖 Leveling Guide** — Act-by-act walkthrough for all 10 acts with zones, skill gems to collect, boss strategies, and expert tips
- **⚔ Items Database** — Browse weapons, armour, accessories, gems, flasks and currency with filtering by category, rarity, and full-text search
- **🔨 Crafting Simulator** — Interactive simulator using all major currency orbs (Alchemy, Chaos, Exalted, Annulment, etc.) with crafting bench support
- **🛡 Pro Builds** — Curated builds sourced from top players (maxroll.gg, poe.ninja, community), filterable by difficulty, ascendancy and playstyle
- **📰 News** — Patch notes, league announcements, events, community highlights, and development updates with expandable full content

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom PoE dark theme)
- **Testing**: Jest + React Testing Library

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
npm run start
```

### Tests

```bash
npm test
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  app/                # Next.js App Router pages
    page.tsx          # Home / Dashboard
    leveling-guide/   # Leveling Guide page
    items/            # Items Database page
    crafting/         # Crafting Simulator page
    builds/           # Pro Builds page
    news/             # News page
    __tests__/        # Unit tests
  components/         # Shared React components
    Navbar.tsx
    Footer.tsx
    ItemCard.tsx
    BuildCard.tsx
    NewsCard.tsx
  data/               # Static game data
    items.ts
    builds.ts
    news.ts
    leveling.ts
    crafting.ts
  types/              # TypeScript type definitions
    index.ts
```

## Disclaimer

Path of Exile is a trademark of Grinding Gear Games. This is a fan-made companion tool and is not affiliated with or endorsed by Grinding Gear Games.
