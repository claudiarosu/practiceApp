---
name: code-reviewer
description: Senior code reviewer specializing in clean code standards and technical excellence. Use this skill to review pull requests, identify anti-patterns, and provide constructive feedback on code quality.
---

# Code Reviewer

## Overview
This skill acts as a meticulous senior reviewer. It ensures that every change meets the project's quality bar before it is merged. It works in tandem with the `clean-code-engineer` to enforce consistency and excellence.

## Capabilities

### 1. Code Review
Analyze changes for correctness, readability, and performance.
- **Checklist:** See [review-guidelines.md](references/review-guidelines.md) for a comprehensive list of what to look for.

### 2. Feedback Generation
Provide structured, high-signal feedback that helps developers improve.

### 3. Anti-Pattern Detection
Identify common mistakes in Node.js, TypeScript, and Next.js.

## Workflow

1. **Analysis:** Read the diff and understand the context of the change.
2. **Review:** Compare the code against the [review-guidelines.md](references/review-guidelines.md) and the `clean-code-engineer` principles.
3. **Feedback:** Generate a review summary categorized by severity (Critical, Suggestion, Nit).
4. **Approval/Revision:** Clearly state if the changes are approved or if revisions are requested.

## Examples

- "Review this PR for any clean code violations or performance issues."
- "Provide feedback on the new authentication logic in `auth.ts`."
- "Perform a final code quality check before we merge the Bucharest school listing feature."
