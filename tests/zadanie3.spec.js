import { test, expect } from '@playwright/test';

test('simple get request', async ({ request }) => {
    const response = await reuqest.get('/api/index.php?endpoint=products');

    expect(response.status()).toBe(200);
    expect(await response.text()).toBeContain('Miecz Runiczny')

});

test('simple post request', async ({ request }) => {
    const response = await request.post('/api/index.php?endpoint=products', {

   data: {
    "name": "Testowy produkt",
    "price": 123.45,
    "currenty": "PLN"
  }
})

expect(response.status()).toBe(201);
expect(await response.text()).toContain('Testowy produkt')

})

