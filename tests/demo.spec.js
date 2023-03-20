import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByText('Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitc').dblclick();
  await page.getByText('Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitc').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.getByText('Swag Labs').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('#page_wrapper').click();
  await page.getByRole('button', { name: 'Close Menu' }).click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('za');
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');
  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');
  await page.locator('[data-test="product_sort_container"]').selectOption('az');
  await page.getByText('ProductsName (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to').click();
 
});