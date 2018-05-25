<template lang="pug">
#carousel.carousel.slide(data-ride='carousel')
  //- b-carousel#banner(style='text-shadow: 1px 1px 2px #333; height: 400px; overflow: hidden;', controls='', indicators='', background='rgba(0,0,0,0.3)', :interval='4000', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
  //-   b-carousel-slide(v-for = '(image) in images', :key='image.path')
  //-     img.d-flex(:src="$api.rootLink + image.path" slot='img', height='400')
  ol.carousel-indicators()
    li(data-target='#carousel', v-for='(image, index) in images', :key='image.path', :data-slide-to='index')
  .carousel-inner
    .carousel-item(v-for='(image, index) in images', :key='image.path', :class="{ active: index == 0 }")
      img.d-block.w-100(:src="$api.rootLink + image.path", alt='First slide')
      .carousel-caption.d-none.d-md-block(style="background: rgba(0, 0, 0, .3)")
        h5 測試
        p 測試
  a.carousel-control-prev(href='#carousel', role='button', data-slide='prev')
    span.carousel-control-prev-icon(aria-hidden='true')
    span.sr-only Previous
  a.carousel-control-next(href='#carousel', role='button', data-slide='next')
    span.carousel-control-next-icon(aria-hidden='true')
    span.sr-only Next
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapState({
      images: state => state.banner
    })
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    backgroundStyle (url) {
      return `url(${url}) center center;`
    }
  }
}
</script>
<style lang="sass" scoped>
@font-face
	font-family: "DFXing"
	src: url("../../../assets/DFXingKaiStd-W5.otf") format("opentype")

#carousel
  flex-grow: 999
  #banner
    .picture
      // width: 100%
      // margin: 0 auto
    img
      margin: 0 auto
      overflow: hidden
    h3
      font-family: DFXing
      font-size: 40px

</style>
