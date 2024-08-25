import {test,expect} from '@playwright/test'

test('Dropdown Testing',async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('#drop1').selectOption('doc 3')
})

test('Multiselect Options Testing', async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
  await page.locator('#multiselect1').selectOption('volvox');
  await page.locator('#multiselect1').selectOption('swiftx');
  await page.locator('#multiselect1').selectOption('Hyundaix');
  await page.locator('#multiselect1').selectOption('audix');
  await page.locator('#multiselect1').selectOption(['Hyundaix', 'audix']);
});

test('Clear and fill the text box',async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
    await page.locator('#textbox1').clear()
    await page.locator('#textbox1').fill('Mahesh')
});

test.only('New page', async({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
    await page.locator('#link1').click()
    await page.locator('//*[contains(text(),"What is Selenium?")]').click()
    const page1promise = page.waitForEvent('popup');
    await page.locator("(//*[contains(text(),'Click here')])[2]").click()

})