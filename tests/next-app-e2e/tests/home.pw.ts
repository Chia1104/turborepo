import { test, expect } from "@playwright/test";

test("home page", async ({ page }) => {
  await page.goto("http://127.0.0.1:3002/");
  const img = page.locator("img");
  await expect(img).toBeVisible();
});
