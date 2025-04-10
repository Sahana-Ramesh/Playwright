
const {test, expect} = require('@playwright/test'); //importing required node modules from folder to access all the features n functions
//currently imported test package: for writing the test, expect to add validations

//test block
//test('title for this test', anonymous function ()=>), 
// this function will use some fixtures provided by Plwrt i.e, page which contains many functions
//Why async: javascript is synchronized lang, so to go step by step async keyword is specified as a promise from jS 
//Why Await: waits until the promise is met
test('Home Page', async({page})=>{
    await page.goto('https://demoblaze.com/');

    let title_name = page.title()
    console.log("Page title- "+ title_name)

    await expect(page).toHaveTitle('STORE');
    let page_url = page.url('https://demoblaze.com/')
    console.log(page_url)
    await expect(page).toHaveURL('https://demoblaze.com/');
    await page.close()
    //every line where page methods are access, await is expected
})