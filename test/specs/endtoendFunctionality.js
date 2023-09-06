//const fs = require("fs")
//let credentials = JSON.parse(fs.readFileSync('testdata/LoginTest.json'))
describe("end to end", async () => {
    it("functional testing", async () => {

        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("#username").setValue("rahulshettyacademy")

        await $("#password").setValue("learning")
        const radio = await $$(".customradio")
        const input = await radio[1]
        await input.$("span").click()
        await browser.isAlertOpen()
        const popup1 = await $(".modal-content")
        await popup1.waitForDisplayed()
        await popup1.$("#okayBtn").click();
        await $("#signInBtn").click();
        await $("*=Checkout").waitForExist()
        const mobiles = await $$("div[class='card h-100']")
        console.log("****\\\\\****" + mobiles.length);
        const toselect = ['Samsung Note 8', 'iphone X']
        for (let i = 0; i < mobiles.length; i++) {
            const mobname = await mobiles[i].$("div h4 a")
            let mob = await mobname.getText();
            //await browser.pause(5000)
            if (toselect.includes(mob)) {
                const addtocart = await mobiles[i].$(".btn-info").click()
            }
        }
        await $("*=Checkout").click();


        //await browser.pause(5000);


        // await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        // (await $("#username")).setValue("rahulshettyacademy");
        // (await $("#password")).setValue("learning");
        // // (await $("#signInBtn")).click();
        // const radiobuttons = await $$(".customradio");
        // const userip = radiobuttons[1];
        // (await userip.$("span")).click()
        // const popup = await $(".modal-content")
        // await popup.waitForDisplayed()
        // await popup.$("#okayBtn").click();

    })

})