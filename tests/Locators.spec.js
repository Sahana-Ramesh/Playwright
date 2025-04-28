//locating elements on webpage
//1)Any Unique property of the element
//2)CSS
//3)Xpath

//import { expect, test } from "@playwright/test"; --->another way to import
const { expect, test } = require("@playwright/test");

test('test_locators', async ({page})=>{
    await page.goto("https://demoblaze.com/")
    //locator("specify attribute or xpath or css") is a function used to locate any element on webpage
    //Click('locator')-->another approach

    //await page.locator(id="login2").click();
    //-------OR-----------
    await page.click('id=login2');

    //enter username
    await page.locator('id=loginusername').fill("pavanol");
    //await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')

    await page.locator('id=loginpassword').fill("test@123");

    await page.click("//button[normalize-space()='Log in']");

    const logout_var = await page.locator("//a[@id='logout2']");

    await expect(logout_var).toBeVisible();

})
