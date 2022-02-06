const {Given} = require("cucumber");
Given(/^Sanity$/, async function () {
    console.log("selam")
    await this.page.waitForTimeout(30000)

});