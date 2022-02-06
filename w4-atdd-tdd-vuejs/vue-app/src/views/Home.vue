<template>
  <div class="home">
    <div id="video-list-container">
      <Video v-for="video in videos"
             :video="video"
             :key="video.id"/>
    </div>
  </div>
</template>

<script>
import Video from "@/components/Video";
import API from "@/api";


export default {
  name: 'Home',
    data() {
      return {
        videos: [],
      }
    },
    components: {
      Video
    },
    async created() {
      try {
        this.videos = await API.getVideoList()
        console.log(this.videos)
      } catch (e) {
        console.error("error:", e)
      }
    }
}
</script>

<style>
#video-list-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-top: 20px;
}
</style>