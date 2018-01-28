<template lang="pug">
#index
  Carousel
  Latest
  Card
</template>
<script>
import Carousel from './Carousel'
import Card from './Card'
import Latest from './Latest'

export default {
  components: {
    Carousel,
    Latest,
    Card
  }
}
</script>
<style lang="sass">
#index
  display: flex
  flex-direction: column
</style>
