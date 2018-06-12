<template lang="pug">
#Performance
  Card(:video="video", v-for="(video, index) in videos", :key="index")
</template>

<script>
import { mapState } from 'vuex'
import Card from './Card'

export default {
  name: 'Performance',
  components: {
    Card
  },
  computed: {
    ...mapState({
      videos: state => state.video.slice(-4)
    })
  }
}
</script>

<style lang="sass" scoped>
#Performance
  display: flex
  justify-content: center
  margin: 0px auto
  @include breakpoint(pc)
    width: 80vw
  @include breakpoint(mobile)
    flex-wrap: wrap
    width: 100vw
</style>
