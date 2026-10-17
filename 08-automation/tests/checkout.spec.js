const { test, expect } = require('@playwright/test');

test('TC-CHK-11: complete an order', async ({ page }) => {
  await page.goto('/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="shopping-cart-link"]');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  await page.click('[data-test="finish"]');

  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});