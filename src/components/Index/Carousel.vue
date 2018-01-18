<template lang="pug">
#carousel
  b-carousel#banner(style='text-shadow: 1px 1px 2px #333;', controls='', indicators='', background='rgba(0,0,0,0.3)', :interval='4000', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
    b-carousel-slide
      img.d-flex(slot='img', height='350', src="../../assets/IMG_1513.jpg")
      h1 俄羅斯風情1
    b-carousel-slide
      img.d-flex(slot='img', height='350', src="../../assets/IMG_1513.jpg")
      h1 俄羅斯風情2
    b-carousel-slide
      img.d-flex(slot='img', height='350', src="../../assets/IMG_1513.jpg")
      h1 俄羅斯風情3
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
    img
      margin: 0 auto
</style>
