import { test, expect } from "@playwright/test";

test("Handle manual scrolling on a webpage",async({page})=>{
    await page.goto("https://demoqa.com/text-box")
    await page.evaluate(()=>{
        window.scrollTo(0,500)
    })
    await page.pause()
})