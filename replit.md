# Atelier Blankenese

A professional portfolio website for an interior architecture studio based in Hamburg and Limassol.

## Tech Stack

- **Framework**: TanStack Start (SSR) with TanStack Router and React Query
- **Language**: TypeScript
- **Build Tool**: Vite with `@lovable.dev/vite-tanstack-config`
- **Styling**: Tailwind CSS v4 with Radix UI primitives and shadcn/ui components
- **Package Manager**: npm

## Project Structure

- `src/routes/` — File-based routing (TanStack Router)
- `src/components/ui/` — shadcn/ui component library
- `src/lib/` — Utilities, error handling
- `src/assets/` — Images and asset metadata
- `public/` — Static assets
- `src/server.ts` — SSR server entry point
- `src/router.tsx` — Router initialization

## Development

```bash
npm run dev       # Start dev server on port 5000
npm run build     # Production build
npm run lint      # ESLint
npm run format    # Prettier
```

## Configuration Notes

- Dev server runs on `0.0.0.0:5000` with `allowedHosts: true` for Replit proxy compatibility
- The `@lovable.dev/vite-tanstack-config` package handles TanStack Start, Tailwind, tsconfig paths, and React plugins

## User Preferences

- Keep existing project structure and conventions
