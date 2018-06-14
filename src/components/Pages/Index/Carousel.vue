<template lang="pug">
#carousel.carousel.slide.w-100(data-ride='carousel')
  ol.carousel-indicators
    li(
      data-target='#carousel',
      v-for='(image, index) in images',
      :key='image.path',
      :data-slide-to='index'
    )
  .carousel-inner
    //- must one has .active
    .carousel-item(
      v-for='(image, index) in images',
      :key='image.path',
      :class="{ active: index == 0 }"
    )
      img.d-block(:src="$api.rootLink + image.path", alt='First slide')
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
  name: 'Carousel',
  computed: {
    ...mapState({
      images: state => state.banner
    })
  }
}
</script>
<style lang="sass" scoped>
#carousel
  background: rgba(0, 0, 0, .5)
  img
    margin: 0px auto
    @include breakpoint(pc)
      width: 80vw
    @include breakpoint(mobile)
      width: 100vw

</style>
