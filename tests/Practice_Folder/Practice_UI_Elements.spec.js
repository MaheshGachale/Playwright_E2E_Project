import { test, expect } from '@playwright/test'

// Dropdown select test
test('Dropdown: Select option', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('#drop1').selectOption('doc 3')
})

// Multiselect options test
test('Multiselect: Select multiple options', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('#multiselect1').selectOption('volvox')
    await page.locator('#multiselect1').selectOption('swiftx')
    await page.locator('#multiselect1').selectOption('Hyundaix')
    await page.locator('#multiselect1').selectOption('audix')
    await page.locator('#multiselect1').selectOption(['Hyundaix', 'audix'])
})

// Clear and fill text box
test('Textbox: Clear and fill', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('#textbox1').clear()
    await page.locator('#textbox1').fill('Mahesh')
})

// Navigation and popup test
test('Navigation: New page and popup', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('#link1').click()
    await page.getByRole('link', { name: 'What is Selenium?' }).click()
    await page.getByRole('link', { name: 'HTML for Selenium' }).click()
    await page.goBack()
    const page1Promise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'www.Selenium-By-Arun.blogspot.com', exact: true }).click()
    const page1 = await page1Promise
    await page1.getByRole('link', { name: 'What is Selenium?' }).click()
    await expect(page1.getByText('Java (Famous and mostly used)')).toBeVisible()
})

// Search box test
test('Search: Blog textbox', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.getByRole('textbox', { name: 'search' }).click()
    await page.getByRole('textbox', { name: 'search' }).fill('MAHESH')
    await page.getByRole('button', { name: 'Search' }).click()
})

// Radio button test
test('Radio: Select option', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('#radio1').check()
})

// Alert handling test
test('Alert: Handle alert dialog', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Hello')
        await dialog.accept()
    })
    await page.getByRole('button', { name: 'ClickToGetAlert' }).click()
})

// Checkbox test (fixed incomplete line)
test('Checkbox: Check and assert', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    const checkbox = page.locator('#checkbox2')
    await checkbox.check()
    await expect(checkbox).toBeChecked()
})

// Prompt dialog test
test('Dialog: Type in prompt', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    page.once('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept('Your input text')
    })
    await page.locator('#prompt').click()
})

// Confirm dialog test
test('Dialog: Confirm alert', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    page.once('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.dismiss()
    })
    await page.locator('#confirm').click()
})

// Delayed dropdown test
test('Dropdown: Delayed dropdown select', async ({ page }) => {
    await page.goto('https://omayo.blogspot.com/2013/05/page-one.html')
    await page.locator('.dropbtn').first().click()
    await page.locator('//*[@id="myDropdown"]/a[2]').click()
})