# Atelier Blankenese

A professional portfolio website for an interior architecture studio based in Hamburg and Limassol.

## Tech Stack

- **Framework**: React 19 SPA with react-router-dom v7
- **Language**: TypeScript
- **Build Tool**: Vite 7 with @vitejs/plugin-react and @tailwindcss/vite
- **Styling**: Tailwind CSS v4 with Radix UI primitives and shadcn/ui components
- **Package Manager**: npm
- **Deployment target**: Netlify (static)

## Project Structure

- `src/pages/` — Page components (Home, Projects, NotFound)
- `src/App.tsx` — Route definitions (react-router-dom)
- `src/main.tsx` — React entry point with BrowserRouter
- `src/components/ui/` — shadcn/ui component library
- `src/lib/` — Utilities (cn helper)
- `src/assets/` — Asset metadata JSON files (image URLs)
- `public/` — Static assets, `_redirects` for SPA routing
- `index.html` — SPA shell
- `netlify.toml` — Netlify build + redirect config

## Development

```bash
npm run dev       # Start dev server on port 5000
npm run build     # TypeScript check + Vite build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint
npm run format    # Prettier
```

## Configuration Notes

- Dev server runs on `0.0.0.0:5000` with `allowedHosts: true` for Replit proxy compatibility
- Production build outputs to `dist/` — deploy directly to Netlify
- `public/_redirects` and `netlify.toml` both contain `/* /index.html 200` for client-side routing

## User Preferences

- Keep existing project structure and conventions
