# Contributing to YUTOMAX Website

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yutomaxsolutions/website.git
cd website

# Install dependencies (requires pnpm 10.33+)
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
pnpm dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000) with Turbopack.

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run Vitest tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm analyze` | Build with bundle analyzer |

## Branch Naming Conventions

- `feat/short-description` — New features
- `fix/short-description` — Bug fixes
- `chore/short-description` — Maintenance, deps, CI
- `docs/short-description` — Documentation only

## Pull Request Checklist

Before opening a PR, ensure:

- [ ] `pnpm type-check` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm test` passes
- [ ] `pnpm build` succeeds
- [ ] No placeholder content or hardcoded mock data added

## Architecture Notes

### Frontend / Backend Boundary

The frontend **never** accesses the database directly. The data flow is:

```
Contact Form → Client-side Zod validation → /api/contact (Next.js API route) → Backend API → Database
```

- The backend API URL is stored in `API_URL` (server-only env var)
- The frontend only calls internal Next.js API routes
- The API client (`src/lib/api/client.ts`) is for server-side use only

### Content & Configuration

All marketing content is centralized in `src/config/` and `src/content/`. UI components should never contain hardcoded copy.

### Styling

The project uses Tailwind CSS with CSS custom properties (design tokens) defined in `src/app/globals.css`. All colour and spacing decisions should reference the design system.
