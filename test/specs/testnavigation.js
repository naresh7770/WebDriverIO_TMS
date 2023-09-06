describe("Navigate to Instagram", () => {

    it("Click on login", async () => {

        await browser.url("http://rmgtestingserver/domain/Online_Tourism_Management_System/")


        const title = await browser.getTitle();
        const userSign = await $("//a[text()='/ Sign In']")
        const userID = await $("//input[@placeholder='Enter your Email']")
        const userPassword = await $("//input[@placeholder='Enter your Email']//following-sibling::input")
        const userSignIn = await $("//input[@value='SIGNIN']")

        await userSign.click()
        //await browser.pause(300000)
        await userID.waitForDisplayed()
        await userID.addValue("anuj@gmail.com")
        await userPassword.addValue("Test@123")
        await userSignIn.click()
        //await browser.pause(300000)
        await expect(title).toEqual("TMS | Tourism Management System")

    })
})
