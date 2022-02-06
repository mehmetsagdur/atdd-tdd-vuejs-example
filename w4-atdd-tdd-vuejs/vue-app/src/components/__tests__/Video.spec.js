import Video from "@/components/Video";
import {mount} from "@vue/test-utils";

describe("Video.vue", () => {
    describe("exists check", () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(Video, {
                propsData: {
                    video: {}
                }
            })
        })
        it("should component exists", () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it("should render video img", () => {
            const img = wrapper.find('#video-image')
            expect(img.exists()).toBeTruthy()
        })
        it("should render owner img", () => {
            const img = wrapper.find('#owner-image')
            expect(img.exists()).toBeTruthy()
        })
        it("should render video title", () => {
            const title = wrapper.find("#video-name")
            expect(title.exists()).toBeTruthy()
        })
        it("should render video owner name", () => {
            const title = wrapper.find("#video-owner")
            expect(title.exists()).toBeTruthy()
        })
        it("should render video view count", () => {
            const title = wrapper.find("#videoViews")
            expect(title.exists()).toBeTruthy()
        })
        it("should render video date", () => {
            const title = wrapper.find("#videoDate")
            expect(title.exists()).toBeTruthy()
        })
        it('render video prop correctly', () => {
            const video = {
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }
            const wrapper = mount(Video, {
                propsData: {
                    video
                }
            })
            expect(wrapper.exists()).toBeTruthy()
            expect(wrapper.find('#video-image').attributes('src')).toEqual(video.coverImage)
            expect(wrapper.find('#owner-image').attributes('src')).toEqual(video.ownerImage)
            expect(wrapper.find('#owner-image').attributes('alt')).toEqual(video.ownerName)
            expect(wrapper.find("#video-name").text()).toEqual(video.title)
            expect(wrapper.find("#video-owner").text()).toEqual(video.ownerName)
            expect(wrapper.find("#videoViews").text()).toEqual(video.viewCount + " görüntüleme")
            expect(wrapper.find("#videoDate").text()).toContain(video.publishDateInMonth + " ay önce")
        })
    })
})