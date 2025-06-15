const {expect} = require("@playwright/test")

class loginPage{
    constructor(page){
        this.page = page
        this.userNameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.submitBtn = page.locator("[type='submit']")
        this.errorMsg = page.locator("[data-test='error']")
    }


    async login(username,password){
        await this.page.goto('https://www.saucedemo.com/')
        await this.page.waitForLoadState('networkidle')
        await this.userNameInput.type(username)
        await this.passwordInput.fill(password)
        await this.submitBtn.click()
        await this.errorMsg.waitFor({state:'visible'})

        if (await this.errorMsg.isVisible()){
            console.log('Login Failed. Incorrect username or password')
        }
    }
}

module.exports = loginPage