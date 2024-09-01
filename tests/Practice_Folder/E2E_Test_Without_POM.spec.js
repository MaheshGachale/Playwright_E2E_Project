import {test,expect} from '@playwright/test'

test('E2E_Test',async ({page}) => {

   await page.goto('https://www.saucedemo.com/')
   await page.locator('#user-name').fill('standard_user')
   await page.locator('#password').fill('secret_sauce')
   await page.locator('#login-button').click()
   await page.locator('.inventory_item_name').first().click()
   await page.locator('#add-to-cart').click()
   await page.locator('.shopping_cart_link').click()
   await page.locator('#checkout').click()
   await page.locator('#first-name').fill('Mahesh')
   await page.locator('#last-name').fill('G')
   await page.locator('#postal-code').fill('1212')
   await page.locator('#continue').click()
   await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
   await page.locator('#finish').click()
   await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
})