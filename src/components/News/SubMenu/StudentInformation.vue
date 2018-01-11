<template>
  <div id="studentInformation">
    <!-- directive -->
    <div class="images" v-viewer>
      <img src="https://p2.bahamut.com.tw/S/2KU/53/0001480453.JPG">
      <img src="https://p2.bahamut.com.tw/S/2KU/17/fea2935ecc86354cfdcc6b983c7zj6h4.JPG">
      <img src="https://p2.bahamut.com.tw/M/2KU/46/80e1640a8d8e5b853d0bbbf5547zmd64.JPG">
      <img src="https://p2.bahamut.com.tw/M/2KU/51/a5cae96960380ecae3246a05a1azmdb4.JPG ">
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
      images: ['1.jpg', '2.jpg','3.jpg']
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
