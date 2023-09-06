import { expect } from "chai"
describe("tablesorting", async () => {

    it('should sort the table', async () => {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await browser.pause(4900)
        const list = $$('//tr//td[1]')
        //console.log("************" + await list.length);
        const originalnames = await list.map(res => res.getText())
        console.log("original names" + originalnames);
        const duplicate = originalnames.slice();
        console.log("duplicate" + duplicate);
        const sortednames = await duplicate.sort()
        console.log("%%%%%%%%%" + sortednames);
        console.log("@@@@@@" + expect(originalnames).to.equal(sortednames));

    })
})