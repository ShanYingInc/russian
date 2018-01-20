<template>
  <div id="studentInformation">
    <!-- directive -->
    <div class="images" v-viewer>
      <img src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.0-8/26758529_966834316826184_8330542778646408330_o.jpg?oh=1f6f32439c2fdbaa152eeabf0eeaeee8&oe=5AE0F85D">
      <img src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.0-8/26961944_966834440159505_535695174338697310_o.jpg?oh=7d57702c5d58f96ad9900f90577c02e9&oe=5AE8CF4C">
      <img src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.0-8/27023660_966834376826178_7524795969737867969_o.jpg?oh=172b4bfde534037c1b9c686ab7e79a3c&oe=5AF12B22">
      <img src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.0-8/26951819_966834350159514_4235087126303419684_o.jpg?oh=f44ea2e858d646c6c14d62e490d550c4&oe=5AEF3C2F">
    </div>
    <viewer :images="images">
      <img v-for="src in images" :src="src" :key="src">
    </viewer>
  </div>
</template>
<script>
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)
  export default {
    data() {
      images: ['1.jpg', '2.jpg','3.jpg','4.jpg']
    },
    toolbar: {

    }
  }
</script>

<style lang="sass" scoped>
#studentInformation
  border: 1px solid #ccc
  border-radius: 5px
  padding: 20px
  width: 70%
.images
  img
    height: 150px
</style>
