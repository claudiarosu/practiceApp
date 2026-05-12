# Database & Performance Best Practices

## Prisma & SQL
- **Indexing:** Ensure frequent filter fields (like `sector` or `type`) are indexed in the schema.
- **N+1 Prevention:** Use `include` or `select` judiciously to avoid multiple queries in loops.
- **Surgical Selection:** Only select the fields you need (e.g., `select: { id: true, name: true }`) to reduce payload size.

## React Performance
- **Memoization:** Use `useMemo` and `useCallback` only when expensive calculations or stability is required for child re-renders.
- **Key Props:** Always use stable, unique keys (like `school.id`) in lists.
- **Image Optimization:** Use `next/image` for automatic resizing and lazy loading.
