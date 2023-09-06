describe("window handle", async () => {

    it("windowhandle methods", async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(3000)
        await $(".blinkingText").click()
        const list = await browser.getWindowHandles()
        await browser.switchToWindow(list[1])
        await browser.pause(3000)
        const title = await $("h1").getText()
        console.log("###########" + title);
        await browser.switchToWindow(list[0])
        await browser.newWindow("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(5000)
        await $("#username").setValue("hello")
    })
})