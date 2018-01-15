<template lang="pug">
#top
  Slider
  Carousel
</template>
<script>
import Slider from './Slider'
import Carousel from './Carousel'

export default {
  components: {
    Slider,
    Carousel
  }
}
</script>
<style lang="sass" scoped>
#top
  display: flex
</style>
