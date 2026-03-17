import { test, expect } from "@playwright/test";

test("New window handling",async({page})=>{
    await page.goto("https://demoqa.com/browser-windows")
    const popupPromise=page.waitForEvent("popup")
    await page.getByRole("button",{name:"New Window"}).first().click()
    const popupPage=await popupPromise
    const txtActual=await popupPage.getByText("sample page").textContent();
    await expect(txtActual).toContain("This is a sample page")
    popupPage.close();
    await page.pause();
})