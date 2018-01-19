<template lang="pug">
#performance
  Slider
  Card
</template>
<script>
import Card from './Card'
import Slider from '../News/SubMenu/Slider'

export default {
  components: {
    Card,
    Slider
  }
}
</script>
<style lang="sass" scoped>
#performance
  display: flex
  align-items: flex-start
  #slider
    align-self: flex-start
</style>
