# Clean Code & General Best Practices

## Core Principles
- **KISS (Keep It Simple, Stupid):** Avoid over-engineering. Write the simplest code that works.
- **DRY (Don't Repeat Yourself):** Extract common logic into reusable functions or components.
- **YAGNI (You Ain't Gonna Need It):** Don't add functionality until it is actually needed.
- **Boy Scout Rule:** Always leave the code a little cleaner than you found it.

## Naming Conventions
- Use meaningful and pronounceable variable names (e.g., `isSchoolNearMetro` instead of `snm`).
- Functions should be verbs (e.g., `calculateAvgGrade`).
- Booleans should have a prefix like `is`, `has`, or `should`.

## Functions
- **Single Responsibility (SRP):** A function should do one thing and do it well.
- **Small Size:** Aim for functions under 20 lines.
- **Few Arguments:** Prefer 0-2 arguments. Use an object for 3+ arguments.
- **No Side Effects:** Functions should ideally be pure or clearly document their mutations.

## Error Handling
- Use `try/catch` for expected operational errors.
- Never swallow errors silently; at least log them or provide a user-friendly fallback.
- Use custom error classes for domain-specific failures.
