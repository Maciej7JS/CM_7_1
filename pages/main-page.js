import { expect } from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;
        this.url = '/';
        this.title = 'Testowy Sklep – Strona główna';
        this.pageHeading = this.page.getByRole('heading', { name: 'Strona główna'});
    }
async goto() {
    await this.page.goto(this.url);
    }
async veryfiTtile() {
    await expect(this.page).toHaveTitle(this.title);
    }

async verfiHeading() {
    await expect(this.pageHeading).toBeVisible();
}
}

module.exports = { MainPage };