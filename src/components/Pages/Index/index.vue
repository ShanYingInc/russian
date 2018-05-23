<template lang="pug">
#index
  Carousel
  Latest
  Performance
</template>
<script>
import Carousel from './Carousel'
import Performance from './Performance'
import Latest from './Latest'

export default {
  name: 'Index',
  components: {
    Carousel,
    Latest,
    Performance
  }
}
</script>
<style lang="sass">
#index
  display: flex
  flex-direction: column
</style>
