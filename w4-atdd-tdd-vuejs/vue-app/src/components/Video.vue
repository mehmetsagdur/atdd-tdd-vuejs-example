<template>
  <div class="video-container">
    <img id="video-image"
         @mouseover="hover = true"
         @mouseleave="hover = false"
         :src="pictureHover "
         :alt="video.title"
         @click="navigateToWatchPage">
    <div class="video-details-container">
      <div class="owner-img-container">
        <img id="owner-image"
             :src="video.ownerImage"
             :alt="video.ownerName">
      </div>
      <div class="video-details">
        <span id="video-name">{{ video.title }}</span>
        <span id="video-owner">{{ video.ownerName }}</span>
        <div class="video-post-details">
          <span id="videoViews">{{ video.viewCount }} görüntüleme</span>

          <span id="videoDate">{{ video.publishDateInMonth }} ay önce</span>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Video.vue",
  props: {
    video: Object,
  },
  data() {
    return {
      hover: false,
      isFavorite: false,
    };
  },
  computed: {
    pictureHover() {
      if (this.hover === true) {
        return this.video.hoverImage
      } else {
        return this.video.coverImage
      }
    },
  },
  methods: {
    navigateToWatchPage() {
      this.$router.push({path: 'watch', query: {id: this.video.id}})
    },
  }
}
</script>

<style scoped>
.video-container {
  width: 360px;
  font-family: "Roboto", "Arial", sans-serif;
  margin-right: 15px;
  position: relative;

}

#video-image {
  width: 360px;
  height: 200px;
}

#owner-image {
  width: 36px;
  height: 36px;
  border-radius: 20px;
}

.video-details-container {
  display: flex;
  height: 150px;
  width: 360px;
  flex-wrap: wrap;
}

.video-details {
  font-family: "Roboto", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  max-height: 100px;
  max-width: 310px;
  height: 150px;
  width: 310px;
  position: relative;
  overflow: hidden;

}

.owner-img-container {
  height: 100px;
  width: 50px;
}

#video-name {
  line-height: 2rem;
  max-height: 4rem;
  display: block;
  text-align: left;
}

.video-post-details {
  display: flex;
  flex-direction: row;

}

#video-owner {
  font-size: 12px;
  color: #AAAAAA;
  display: block;
  text-align: left;
  line-height: 1.5rem;

}

#videoViews {
  font-size: 12px;
  padding-right: 10px;
  display: block;
  color: #AAAAAA;

}

#videoDate {
  font-size: 12px;
  display: block;
  color: #AAAAAA;

}
</style>