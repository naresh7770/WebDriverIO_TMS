describe("frames", async () => {

    it("frame", async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await browser.pause(3000)
        console.log("**********" + await $$("//a").length);
        browser.switchToFrame(await $("#courses-iframe"))
        await browser.pause(3000)
        console.log("-----------" + await $$("//a").length);


    })
})