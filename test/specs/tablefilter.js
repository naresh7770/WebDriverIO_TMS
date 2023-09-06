describe("apply filter to the table", async () => {

    it("filter", async () => {

        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        const input = await $("#search-field")
        await input.setValue("Tomato")
        const list = await $("tr td:nth-child(1)")
        



        await browser.pause(5000)
    })
})