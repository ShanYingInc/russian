<template lang="pug">
#carousel
  b-carousel#carousel1(style='text-shadow: 1px 1px 2px #333;', controls='', indicators='', background='#ababab', :interval='4000', img-width='350', img-height='350', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
    b-carousel-slide(caption='First slide', text='Nulla vitae elit libero, a pharetra augue mollis interdum.', img-src='https://lorempixel.com/1024/480/technics/2/')
    b-carousel-slide(img-src='https://lorempixel.com/1024/480/technics/4/')
      h1 Hello world!
    b-carousel-slide(img-src='https://lorempixel.com/1024/480/technics/8/')
    b-carousel-slide
      img.d-block.img-fluid.w-100(slot='img', width='1024', height='480', src='https://lorempixel.com/1024/480/technics/5/', alt='image slot')
    b-carousel-slide(caption='Blank Image', img-blank='', img-alt='Blank image')
      p
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        | eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
        | ut lacus vel interdum.
</template>
<script>
import Carousel from 'bootstrap-vue/es/components/carousel/index.js'

export default {
  components: {
    Carousel
  },
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
</style>
