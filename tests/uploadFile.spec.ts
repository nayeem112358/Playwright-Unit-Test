import { test, expect } from "@playwright/test";
import path from 'path';

test("Upload a file",async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const filepath=path.join(process.cwd(),'resources','image1.png')
    await page.locator("#uploadFile").setInputFiles(filepath)
    await page.pause()
})