import { test, expect } from "@playwright/test";

const BASE_URL = process.env.MY_CUSTOM_BASE_URL;

test.describe("basic testing", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(BASE_URL);
  });
  
  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring "webpage".
    await expect(page).toHaveTitle(/webpage/);
  });

  test("has URL", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL(BASE_URL);
  });
  
});
