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

test('Search This Blog Text Box Testing',async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
    await page.getByRole('textbox', { name: 'search' }).click();
    await page.getByRole('textbox', { name: 'search' }).fill('MAHESH');
    await page.getByRole('button', { name: 'Search' }).click();
})

test('Radio Options Testing',async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
    await page.locator('#radio1').check()
})

test('Alert Handling',async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html');
    
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');   
        expect(dialog.message()).toContain('Hello');
        await dialog.accept();
      });
      
      await page.getByRole('button', { name: 'ClickToGetAlert' }).click();
})

test('Check Box option testing', async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('#checkbox2').check()
    const checkbox = page.locator('#checkbox2');
    await expect(checkbox).toBeChecked();
    await page.lo
})

test('Type in dialogue box Testing', async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    page.once('dialog', async dialog => {
        console.log(dialog.message()); 
        await dialog.accept('Your input text');
    });
    await page.locator('#prompt').click()
})

test('confirm alert Testing',async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    page.once('dialog', async dialog=>{
        console.log(dialog.message());
        dialog.dismiss()
    })  
    await page.locator('#confirm').click()
})

test.only('Delayed Dropdown Testing', async ({page}) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('.dropbtn').first().click()
    await page.locator('//*[@id="myDropdown"]/a[2]').click()
})