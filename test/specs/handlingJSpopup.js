import { expect } from "chai"


describe("JavaScript Pop-up", async () => {

    it("Handlingpop-up", async () => {

        await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
        const ele = await $("button")
        await ele.doubleClick()
        await browser.pause(1000)
        // Wait for the alert to appear
        browser.waitUntil(() => {
            return browser.getAlertText() !== null;
        }, { timeout: 5000, timeoutMsg: 'Alert did not appear' });

        // // Switch to the alert dialog
        // browser.switchContexthToAlert($(".modal-content"));

        // // Get the text from the alert
        // const alertText = browser.alertText();
        // console.log('Alert Text:', alertText);

        // // Accept or dismiss the alert based on your scenario
        // browser.acceptAlert(); // or browser.dismissAlert();

        // // Switch back to the default content
        // browser.switchToFrame(null);
        console.log(await browser.isAlertOpen());
        // expect(await browser.isAlertOpen()).to.be.true
        // expect(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        // await browser.pause(3000)
        // await browser.acceptAlert()
        await browser.pause(10000)


    })



})