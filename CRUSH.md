# CRUSH Project Guide

## Commands
- Build: `npm run build`
- Lint: `npm run lint`
- Type Check: `npm run typecheck`
- Test All: `npm test`
- Test Single: `npm test -- --filter src/tests/<file>.test.tsx`

## Code Style
- **Imports**: External → Project (`@/*`) → Components; alphabetized groups
- **Formatting**: Prettier (2 spaces, trailing commas, single quotes), ESLint: React + TS
- **Types**: `interface` for objects, `type` for unions; always specify props
- **Components**: PascalCase, TS interfaces for props, functional components
- **Hooks**: `useX` naming, return objects with named properties
- **Errors**: `<ErrorBoundary>`, `console.error()`, fail gracefully
- **CSS**: Tailwind classes only, no inline styles

## Git
- `.crush/` added to `.gitignore` (verify with `grep '.crush/' .gitignore`)
- Commit messages follow conventional commits (feat/fix/style)