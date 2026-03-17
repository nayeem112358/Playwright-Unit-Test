import { test, expect } from "@playwright/test";

test("Button click test", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");
  await page.getByRole("button", { name: "Double Click Me" }).dblclick();
  const doubleClickMessage = page.locator("#doubleClickMessage");
  await expect(doubleClickMessage).toContainText("double click");
  await page.getByRole("button", { name: "Right Click Me" }).click({ button: "right" });
  const rightClickMessage = page.locator("#rightClickMessage");
  await expect(rightClickMessage).toContainText("right click");
  await page.getByRole("button", { name: "Click Me", exact: true }).click();
  const normalClickMessage = page.locator("#dynamicClickMessage");
  await expect(normalClickMessage).toContainText("dynamic click");
  await page.pause();
});