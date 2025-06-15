const LoginPage = require("./loginPage")

class POMangaer{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

    async login (username,password){
        return await this.loginPage.login(username,password)
    }
}

module.exports = POMangaer