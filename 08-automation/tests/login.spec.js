const { test, expect } = require('@playwright/test');

test('TC-LOGIN-01: valid login opens the products page', async ({ page }) => {
  await page.goto('/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('TC-LOGIN-03: wrong password shows an error', async ({ page }) => {
  await page.goto('/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'wrong_pass');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toContainText('do not match any user');
  await expect(page).not.toHaveURL(/inventory.html/);
});