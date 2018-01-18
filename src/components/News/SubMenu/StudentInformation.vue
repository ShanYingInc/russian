<template>
  <div id="studentInformation">
    <!-- directive -->
    <div class="images" v-viewer>
      <img src="https://lh6.googleusercontent.com/BOQnsuWa47394voCGX-606fWIGVLAz2zjzX1FgScudqkeFctfRPCX5R2kg-DBxb8MxXbG0WNXQ2TIXU=w1920-h949-rw">
      <img src="https://lh5.googleusercontent.com/z-3E1sIMzE_FpuHOrqcWpyQ875T88nSymxTV5e_bT_927NmQxr9AaDajdokfxySy9a6K3kG6A9FQUA0=w1920-h949-rw">
      <img src="https://lh6.googleusercontent.com/5YfDokBcAyZjzs1k43F1M01JnAU1bIT0e-tqJDbuubWXCvCPixvTL1vB2vVklbhxf1cLMo5pbKaf3B0=w1920-h949-rw">
      <img src="https://lh4.googleusercontent.com/G93Wz4XW56fIZiZ6jKg0sKNtiZPIMjyPBcTTo36Hl28WYNhLdhwQ8DYfwPBp3Oa0ctlptYudzC3qgTs=w1920-h949-rw">
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
