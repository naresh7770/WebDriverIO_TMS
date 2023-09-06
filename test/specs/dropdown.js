describe("amazon", async () => {

    it("dropdown", async () => {
        await browser.url("https://www.amazon.in/")
        browser.waitUntil(() => { $("#twotabsearchtextbox").waitForDisplayed() })
        const a = await $("#twotabsearchtextbox");
        const val = "watch";
        await a.setValue(val)
        await $(".autocomplete-results-container").waitForDisplayed();
        const list = await $$("//div[@class='left-pane-results-container']/div/div/div/span[@class='s-heavy']")
        console.log(await list.length + "   checking the i/p   " + await list[1].getText())
        await browser.pause(20000)
        for (let index = 0; index < list.length; index++) {

            let req = await list[index].getText()
            console.log(val.concat(req));

        }
        await browser.pause(10000)
    })
})