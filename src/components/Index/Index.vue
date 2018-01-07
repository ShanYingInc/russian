<template lang="pug">
#index
  Carousel
  Card
</template>
<script>
import Carousel from './Carousel'
import Card from './Card'

export default {
  components: {
    Carousel,
    Card
  }
}
</script>
<style lang="sass">
#index
  display: flex
  flex-direction: column
</style>
