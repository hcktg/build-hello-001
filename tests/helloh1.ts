import { test } from '@playwright/test';

const BASE_URL = process.env.MY_CUSTOM_BASE_URL;

test('verify title of the page', async ({ page }) => {
  await page.goto(BASE_URL);
});
