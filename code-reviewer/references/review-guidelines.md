# Code Review Checklist & Style

## Review Objectives
- **Correctness:** Does the code fulfill the requirements? Are there any logical bugs?
- **Readability:** Is the code easy to understand? Is the intent clear?
- **Maintainability:** Is the code modular? Does it follow clean code principles (DRY, KISS)?
- **Performance:** Are there any obvious bottlenecks (N+1 queries, heavy re-renders)?
- **Security:** Are inputs validated? Are secrets protected?

## Feedback Style
- **Constructive & Kind:** Use "we" instead of "you". Suggest improvements rather than just pointing out flaws.
- **Explain the "Why":** Don't just say "change this"; explain why the change is beneficial.
- **Distinguish Severity:**
  - **Critical:** Blocking issues (bugs, security risks).
  - **Suggestion:** Improvements for readability or idiomatic style.
  - **Nit:** Minor stylistic preferences.

## Key Focus Areas
- **TypeScript:** Check for `any`, missing types, or improper casts.
- **Node.js:** Check for proper async handling and error management.
- **Prisma:** Check for efficient queries and schema alignment.
- **Next.js:** Check for proper use of Server vs Client components.
