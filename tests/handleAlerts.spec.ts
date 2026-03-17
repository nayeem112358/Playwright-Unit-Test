import { test, expect } from "@playwright/test";

test("Handle alerts",async( {page} )=>{
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog", async (dialog) => {
        await dialog.accept();//dialog.dismiss() to cancel the alert;
    });
    await page.getByRole("button",{name:"Click me"}).first().click();
    await page.pause();
});