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

test('New page nevigations test',async ({page}) => {
    
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
    await page.locator('#link1').click();
    await page.getByRole('link', { name: 'What is Selenium?' }).click();
    await page.getByRole('link', { name: 'HTML for Selenium' }).click();
    await page.goBack();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'www.Selenium-By-Arun.blogspot.com', exact: true }).click();
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'What is Selenium?' }).click();
    await expect(page1.getByText('Java (Famous and mostly used)')).toBeVisible();    
})

test.only('Alert Handling',async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
    
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');   
        expect(dialog.message()).toContain('Hello');
        await dialog.accept();
      });
      
      await page.getByRole('button', { name: 'ClickToGetAlert' }).click();
})