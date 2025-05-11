const { test, expect } = require('@playwright/test')
const E2E_Page = require('./E2E_Page')

// E2E test using Page Object Model
test('E2E: Complete purchase flow (POM)', async ({ page }) => {
    const loginPage = new E2E_Page(page)
    await loginPage.goto()
    await loginPage.Login()
    await loginPage.RemaingFlow()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await loginPage.Finish()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
})
