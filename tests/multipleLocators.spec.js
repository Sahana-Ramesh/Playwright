const { test, expect } = require("@playwright/test");

test('multiLocator', async({page})=>{
    await page.goto("https://demoblaze.com/")

    /*const allLinks = await page.$$('a');

    for(const link of allLinks){
        const linkTxt = await link.textContent();
        console.log(linkTxt)
    }*/

    const allPhones = await page.$$("//h4[@class='card-title']/a")

    for(const phones of allPhones){
        const phoneNames = await phones.textContent()
        console.log(phoneNames)
    }
})