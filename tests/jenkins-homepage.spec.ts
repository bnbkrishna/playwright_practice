import { test, expect } from '@playwright/test';

test('Jenkins Homepage', async ({ page }) => {
  await page.goto('https://www.jenkins.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jenkins/);

  await page.screenshot({ path: 'homepage.png', fullPage: true });
});
