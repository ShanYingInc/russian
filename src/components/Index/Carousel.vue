<template lang="pug">
#carousel
  b-carousel#banner(style='text-shadow: 1px 1px 2px #333; height: 400px; overflow: hidden;', controls='', indicators='', background='rgba(0,0,0,0.3)', :interval='4000', v-model='slide', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
    b-carousel-slide(v-for = '(image) in images', :key='image.path')
      img.d-flex(:src="'http://192.168.88.204:3030' + image.path" slot='img', height='400')
      //- h3 俄羅斯風情
</template>
<script>
import { api } from '../../api'

export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      images: []
    }
  },
  beforeMount(){
    const self = this
    api.banner.get().then(data =>{
      self.images = data
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
@font-face 
	font-family: "DFXing"
	src: url("../../assets/DFXingKaiStd-W5.otf") format("opentype")

#carousel
  flex-grow: 999
  #banner
    .picture
      // width: 100%
      // margin: 0 auto
    img
      margin: 0 auto
      
    h3
      font-family: DFXing
      font-size: 40px
      
</style>
