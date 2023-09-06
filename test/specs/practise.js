

describe('TMS', async () => {

    it('loginfailpage', async () => {
        await browser.url("https://demo.actitime.com/login.do")
        console.log("title is " + await browser.getTitle());
        //await expect(browser).toHaveTitle("actiTIME - Login")
        (await $('#username')).setValue("wewe")
            (await $('.form-control')).setValue("1234")
            (await $("input[value='Sign In']")).click()
        console.log((await $(".alert-danger")).getText());
        browser.waitUntil(async () => { await $("input[value='Sign In']").getAttribute("value") === "Sign In" },
            {
                timeout: 40000,
                timeoutMsg: "waiting time finished"

            }
        )

        console.log((await $(".alert-danger")).getText());
    })






})