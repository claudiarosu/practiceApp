---
name: automated-tester
description: QA Automation Engineer specializing in E2E testing with Playwright. Use this skill to add automated tests, verify user flows, and ensure application stability for each new feature.
---

# Automated Tester

## Overview
This skill ensures the reliability and stability of the application. It focuses on end-to-end (E2E) testing, simulating real user behavior in the browser to verify that features work as intended across different devices and scenarios.

## Capabilities

### 1. E2E Test Implementation
Write robust automated tests using Playwright.
- **Standards:** See [testing-guidelines.md](references/testing-guidelines.md) for locators, POM, and best practices.

### 2. Regression Testing
Run existing test suites to ensure new changes haven't introduced bugs.

### 3. Cross-Browser Validation
Verify features work on Chromium, Firefox, and WebKit (Safari).

## Workflow

1.  **Requirement Analysis:** Understand the user flow and edge cases for the new feature.
2.  **Test Planning:** Identify the key interactions and assertions needed.
3.  **Implementation:** Write the test script in `tests/e2e/`. Use the Page Object Model if the page is complex.
4.  **Verification:** Run the tests locally using `npx playwright test`.
5.  **Reporting:** Provide a summary of the test results and any identified issues.

## Examples

- "Add E2E tests for the Bucharest school search and sector filtering."
- "Verify that the mobile map view displays school markers correctly."
- "Implement an automated test for the parent review submission flow."
