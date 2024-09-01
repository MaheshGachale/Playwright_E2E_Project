const {expect} = require('@playwright/test')

export class E2E_Page  {

    constructor(page) {
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.login=page.locator('#login-button')
        this.inventory_item_name=page.locator('.inventory_item_name')
        this.addToCart=page.locator('#add-to-cart')
        this.shoppingcartlink=page.locator('.shopping_cart_link')
        this.checkout=page.locator('#checkout')
        this.fname=page.locator('#first-name')
        this.lname=page.locator('#last-name')
        this.pcode=page.locator('#postal-code')
        this.continue=page.locator('#continue')
        this.finish=page.locator('#finish')

    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async Login(){
        await this.username.fill('standard_user')
        await this.password.fill('secret_sauce')
        await this.login.click()
    }

    async RemaingFlow(page){
        await this.inventory_item_name.first().click()
        await this.addToCart.click()
        await this.shoppingcartlink.click()
        await this.checkout.click()
        await this.fname.fill('Ma')
        await this.lname.fill('G')
        await this.pcode.fill('122')
        await this.continue.click()
    }

    async Finish(){
        await this.finish.click()
    }
}
module.exports = E2E_Page ;