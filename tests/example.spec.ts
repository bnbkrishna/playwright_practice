import { test, expect } from '@playwright/test';

test('basic test', async ({ page },testInfo) => {
  await page.goto('https://playwright.dev/');
  await page.locator('text=Get started').click();
  testInfo.annotations.push({ type: 'url', description: await page.url() });
  await expect(page).toHaveTitle(/.*Installation/);
});
