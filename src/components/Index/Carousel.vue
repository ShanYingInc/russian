<template lang="pug">
#carousel
  b-carousel#banner(style='text-shadow: 1px 1px 2px #333; height: 350px; overflow: hidden;', controls='', indicators='', background='rgba(0,0,0,0.3)', :interval='4000', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
    b-carousel-slide
      img.d-flex(slot='img', height='350', src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.0-8/26758529_966834316826184_8330542778646408330_o.jpg?oh=1f6f32439c2fdbaa152eeabf0eeaeee8&oe=5AE0F85D")
      h3 俄羅斯風情
    b-carousel-slide
      img.d-flex(slot='img', height='350', src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.0-8/26961944_966834440159505_535695174338697310_o.jpg?oh=7d57702c5d58f96ad9900f90577c02e9&oe=5AE8CF4C")
      h3 俄羅斯風情
    b-carousel-slide
      img.d-flex(slot='img', height='350', src="https://scontent.ftpe8-1.fna.fbcdn.net/v/t31.0-8/27023660_966834376826178_7524795969737867969_o.jpg?oh=172b4bfde534037c1b9c686ab7e79a3c&oe=5AF12B22")
      h3 俄羅斯風情
</template>
<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    backgroundStyle (url) {
      return 'url(' + url + ') center center;'
    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  }
}
</script>
<style lang="sass" scoped>
#carousel
  flex-grow: 999
  #banner
    .picture
      // width: 100%
      // margin: 0 auto
    img
      margin: 0 auto
      
</style>
