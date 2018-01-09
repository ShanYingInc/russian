<template lang="pug">
#news
  Slider
  router-view.content
</template>
<script>
import Slider from './Slider'
// import Content from './Content'

export default {
  components: {
    Slider
  }
}
</script>
<style lang="sass">
#news
  display: flex
  flex-direction: row
  align-items: center
  height: 100%
  .content
    margin: 20px auto
</style>
