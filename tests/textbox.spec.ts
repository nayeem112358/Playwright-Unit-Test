import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { generateRandomNumber } from "../utils/utils.ts";

test("Create new user", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.getByRole("textbox", { name: "Full Name" }).fill(faker.person.fullName());
  await page.getByPlaceholder("name@example.com").fill(`nayeem${generateRandomNumber(1000,9999)}@gmail.com`)
  await page.getByRole("textbox", { name: "Current Address" }).fill("Gulshan");
  await page.getByRole("textbox").nth(3).fill("Dhaka");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.pause();
});




