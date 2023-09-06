describe("rahulsheety", async () => {


    it("loginfail", async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        (await $("#username")).setValue("rahulshettyacademy");
        (await $("#password")).setValue("learning");
        // (await $("#signInBtn")).click();
        const radiobuttons = await $$(".customradio");
        const userip = await radiobuttons[1];
        (await userip.$("span")).click()
        const popup = await $(".modal-content")
        await popup.waitForDisplayed()
        await popup.$("#okayBtn").click();
        const userip1 = await radiobuttons[0];
        (await userip.$("span")).click()
        console.log(" whether popup is displayed " + await $(".modal-content").isDisplayed());
        //await expect(popup).not.toBeDisplayed()
        await browser.pause(10000)
        const dropdown = await $("select.form-control");
        await dropdown.selectByAttribute('value', 'consult');
        console.log(await dropdown.getValue())
        await browser.pause(10000)
        await dropdown.selectByIndex(1);
        console.log(await dropdown.getValue())
        await browser.pause(10000)
        await dropdown.selectByVisibleText("Student");
        console.log(await dropdown.getValue())
        await browser.pause(10000)








    })



})