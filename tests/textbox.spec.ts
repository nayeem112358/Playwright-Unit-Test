import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { generateRandomNumber } from "../utils/utils.ts";

test("Create new user", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  const fullName = faker.person.fullName();
  const email = `nayeem${generateRandomNumber(1000,9999)}@gmail.com`;
  const currentAddress = "Gulshan";
  const permanentAddress = "Dhaka";
  // Fill the form
  await page.getByRole("textbox", { name: "Full Name" }).fill(fullName);
  await page.getByPlaceholder("name@example.com").fill(email);
  await page.getByRole("textbox", { name: "Current Address" }).fill(currentAddress);
  await page.getByRole("textbox").nth(3).fill(permanentAddress);
  await page.getByRole("button", { name: "Submit" }).click();
  // Assertions to check if the filled inputs are displayed
  await expect(page.locator('#name')).toHaveText(`Name:${fullName}`);
  await expect(page.locator('#email')).toHaveText(`Email:${email}`);
  await expect(page.locator('#currentAddress').nth(1)).toHaveText(`Current Address :${currentAddress}`);
  await expect(page.locator('#permanentAddress').nth(1)).toHaveText(`Permananet Address :${permanentAddress}`);
  await page.pause();
});




