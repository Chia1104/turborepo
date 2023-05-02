import { test, expect } from "@playwright/test";

test("home page", async ({ page }) => {
  await page.goto("http://127.0.0.1:3002/");
  const text = await page.locator("p.read-the-docs");
  await expect(text).toHaveText(
    "Create with '@chia-stack/react-ts-tailwind' template"
  );
});
