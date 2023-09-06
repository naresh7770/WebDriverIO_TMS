import { expect } from "chai"
describe("scrolldown", async () => {

    it("movetoElement", async () => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const ele = await $("#mousehover")
        //await browser.scroll(0, 1000);
        //await browser.pause(5000)
        await ele.scrollIntoView({ block: "end" })
        await browser.pause(5000)
        await ele.moveTo()
        await browser.pause(5000)
        await $("=Top").click()
        await expect(await browser.getTitle()).to.be.equal("Practice Page")




    })


})