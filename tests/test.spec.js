const {test,expect} = require("@playwright/test")
const POMangaer = require("../pageObjects/POManager")

test("Login", async ({page}) => {
    const pom = new POMangaer(page)

    await pom.login("standard_user","secret_sauce1")

})