# Playwright E2E Testing Standards

## Setup & Configuration
- **Project Structure:** Store tests in `tests/e2e/`. Use `.spec.ts` suffix.
- **Base URL:** Always use the `baseURL` from `playwright.config.ts`.
- **Environment:** Use `.env.test` for testing-specific environment variables.

## Testing Patterns
- **User-Centric Locators:** Use `page.getByRole()`, `page.getByText()`, and `page.getByLabel()` instead of CSS selectors where possible.
- **Independence:** Each test should be independent. Use `beforeEach` to reset state or navigate to the starting page.
- **Assertions:** Use `expect(page).toHaveTitle()`, `expect(locator).toBeVisible()`, etc., for resilient assertions.
- **Page Object Model (POM):** For complex pages (like the school listing or map), create Page Objects in `tests/e2e/pages/` to encapsulate logic and selectors.

## Bucharest School Search Scenarios
- **Search & Filter:** Verify that selecting a sector filters the school list correctly.
- **Map Interaction:** Verify that school markers appear on the map and are clickable.
- **Review Submission:** Verify the end-to-end flow of logging in and submitting a review.
- **Responsive Checks:** Run tests across multiple viewports (Desktop, Mobile Safari, Mobile Chrome).

## Best Practices
- **Avoid Flakiness:** Use `waitFor()` instead of hardcoded timeouts.
- **Cleanup:** Ensure test data is cleaned up or uses a separate database schema.
- **Meaningful Names:** Test descriptions should clearly state the user goal (e.g., "should allow a parent to filter schools by Sector 1").
