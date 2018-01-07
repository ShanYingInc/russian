<template lang="pug">
#news
  Slider
  router-view
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
  flex-direction: column
</style>
