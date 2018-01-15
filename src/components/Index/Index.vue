<template lang="pug">
#index
  Top
  Latest
  Card
</template>
<script>
import Top from './Top'
import Card from './Card'
import Latest from './Latest'

export default {
  components: {
    Top,
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
