import { test, expect } from '@playwright/test';

test.describe('School Search & Filtering', () => {
  test('should filter schools by sector', async ({ page }) => {
    // Navigate to the schools page
    await page.goto('/schools');

    // Check initial state (all mock schools visible)
    await expect(page.locator('h2')).toContainText('3 Schools Found');

    // Select Sector 1 from the filter
    await page.selectOption('select', '1');

    // Verify URL contains the sector parameter
    await expect(page).toHaveURL(/.*sector=1/);

    // Verify that only Sector 1 schools are shown (Colegiul Sf. Sava)
    await expect(page.locator('h2')).toContainText('1 School Found in Sector 1');
    await expect(page.getByText("Colegiul Național 'Sfântul Sava'")).toBeVisible();
    
    // Verify a school from another sector is NOT visible
    await expect(page.getByText('Școala Gimnazială Nr. 195')).not.toBeVisible();
  });

  test('should show empty state when no schools match', async ({ page }) => {
    await page.goto('/schools');

    // Select Sector 2 (where we have no mock schools)
    await page.selectOption('select', '2');

    await expect(page.getByText('No schools found in this sector.')).toBeVisible();
    
    // Test the "Clear all filters" link
    await page.click('text=Clear all filters');
    await expect(page.locator('h2')).toContainText('3 Schools Found');
    await expect(page).toHaveURL(/.*\/schools/);
  });
});
