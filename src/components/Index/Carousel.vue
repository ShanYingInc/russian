<template lang="pug">
#carousel
  b-carousel#carousel(style='text-shadow: 1px 1px 2px #333;', controls='', indicators='', background='#ababab', :interval='4000', img-height='350', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
    b-carousel-slide
      img.d-block(slot='img', height='350', src="../../assets/IMG_1513.jpg")
      h1 俄羅斯風情1
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
  img
</style>
