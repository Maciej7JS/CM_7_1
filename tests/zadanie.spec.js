import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';

test('full e2e path', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.goto();
    await mainPage.verifyTitle();
    await mainPage.veryfiHeading();

    await expect(page.getByTestId('product-title-3')).toHaveText('Peleryna Maskująca');
    await page.getByTestId('product-title-3').click();
});
