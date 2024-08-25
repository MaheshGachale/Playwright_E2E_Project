const E2E_Page = require('./E2E_Page');
import {test, expect} from '@playwright/test'

test('E2E_Test', async ({ page }) => {

    const LoginPage = new E2E_Page(page);

    await LoginPage.goto()
    await LoginPage.Login()
    await LoginPage.RemaingFlow()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await LoginPage.Finish()
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
});
