import { test, expect } from "@playwright/test";

test("Handle static dropdown",async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#oldSelectMenu").selectOption({label:"Blue"})
})

test("Handle dynamic dropdown",async({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-input").press("Enter")
    await page.pause();
})