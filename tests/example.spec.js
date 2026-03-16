// @ts-check
import { test, expect } from '@playwright/test';

test('full e2e path', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Testowy Sklep – Strona główna');
  await expect(page.getByRole('heading', { name: 'Strona główna' })).toBeVisible();

  await expect(page.getByTestId('product-title-3')).toHaveText('Peleryna Maskująca');
  await page.getByTestId('product-title-3').click();

  await expect(page).toHaveURL("/products/p3.html");
  await expect(page.getByRole('heading', { name: 'Peleryna Maskująca' })).toBeVisible();

  await page.getByTestId('buy-btn-3').click();
  await expect(page.getByText('Dodano do koszyka: Peleryna')).toBeVisible();

  await page.getByTestId('cart-button').click();
  await expect(page.getByTestId('cart-panel')).toBeVisible();
  await expect(page.getByTestId('cart-panel').getByText('Peleryna Maskująca (p3)')).toBeVisible();
  await page.getByTestId('cart-buy').click();

  await expect(page.getByText('sukces')).toBeVisible();
});

