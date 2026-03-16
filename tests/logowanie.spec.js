import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/login');

  await page.locator('[data-qa="login-email"]').fill('habibikomtudubaj@nesca.com'); 
  await page.locator('[data-qa="login-password"]').fill('test123');
  await page.locator('data-qa="login-button"]').click();
  await expect(page.getByText(`Logged in as test2`)).toBeVisible();
});