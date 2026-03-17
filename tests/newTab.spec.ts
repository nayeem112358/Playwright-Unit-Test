import { test, expect } from "@playwright/test";

test("Handling new tab",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows")
    const pagePromise=context.waitForEvent("page")
    await page.getByRole("button",{name:"New Tab"}).click()
    const newPage=await pagePromise
    const txtActual=await newPage.getByText("sample page").textContent();
    await expect(txtActual).toContain("This is a sample page")
    await newPage.close()
    await page.pause()
})