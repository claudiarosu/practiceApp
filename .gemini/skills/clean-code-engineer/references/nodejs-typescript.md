# Node.js & TypeScript Best Practices

## TypeScript Standards
- **Strict Mode:** Always use `strict: true` in `tsconfig.json`.
- **No `any`:** Avoid `any` at all costs. Use `unknown` or specific interfaces/types.
- **Explicit Returns:** Define return types for all public-facing functions/APIs.
- **Enums vs Const Objects:** Use `enum` for sets of related constants used in logic, or `const` objects for configuration.

## Node.js Idioms
- **Async/Await:** Prefer `async/await` over raw promises or callbacks.
- **Environment Variables:** Use a single source of truth (e.g., `env.ts` or a config service) to validate `process.env`.
- **Graceful Shutdown:** Handle `SIGTERM` and `SIGINT` to close database connections or servers.

## Next.js (App Router) Specifics
- **Server Components by Default:** Use Client Components (`'use client'`) only when state or effects are required.
- **Data Fetching:** Prefer server-side fetching via Prisma in Server Components.
- **Error Boundaries:** Utilize `error.tsx` for route-level error handling.
- **Loading UI:** Use `loading.tsx` for instant feedback during data transitions.
