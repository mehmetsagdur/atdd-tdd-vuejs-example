const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const waitForSelector = require("../support/action/waitForSelector")
const checkUrlContains = require("../support/check/checkUrlContains")
const clickElement = require("../support/action/clickElement")
const assert = require('assert').strict;

Given('that User goes to Video Site Project\'s HomePage', async function () {
        await openUrl.call(this, "/")

    }
);
When(/^page is loaded$/, async function () {
    await waitForSelector.call(this, '.home')
    // await this.page.waitForTimeout(30000)

});

Then(/^User can see some of videos' title like$/, async function (arr) {
    const selector = ".video-details"

    for (let [ videoTitle ] of arr.rawTable) {
        let video = await this.page.$$eval(
            selector,
            async (items, videoTitle) => {
                const relatedVideo = items
                    .find(item => item.querySelector("#video-name").textContent.includes(videoTitle))
                return !!relatedVideo
            },
            videoTitle
        )
        assert.strictEqual(video,true)
    }

});

Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/")
    await waitForSelector.call(this, '.home')
});

When(/^User hovers "([^"]*)" video$/, async function (videoName) {
    const imageItems = await this.page.$$('.video-container');
    for (let image of imageItems) {
        let videoNameNode = await image.$("#video-name");
        const videoNameText = await this.page.evaluate(videoNameNode => videoNameNode.textContent, videoNameNode);
        if(videoNameText === videoName){
            await image.hover();
        }
    }
});

When(/^User clicks "([^"]*)" video$/, async function (videoName) {
    const selector = ".video-container"

    await this.page.$$eval(
        selector,
        async (items, videoName) => {
            const video = items
                .find(item => item.querySelector("#video-name").textContent === videoName)
            const button = video.querySelector("#video-image")
            await button.click()

        },
        videoName
    )

});

Then(/^User should see watch url correctly$/, async function () {
 //   await this.page.waitForNavigation()
    await checkUrlContains.call(this, false, "watch?id=2")
    await this.page.waitForTimeout(3000)
});
Then(/^User should see hovered image$/, async function () {
    const imageItems = await this.page.$$('.video-container');
    let isFindImage = false;

    for (let image of imageItems) {
        let videoNameNode = await image.$("#video-image");
        const imageUrl = await (await videoNameNode.getProperty('src')).jsonValue()
        if(imageUrl.includes("hover")) {
            isFindImage = true;
        }
    }
    assert.equal(isFindImage, true)
});