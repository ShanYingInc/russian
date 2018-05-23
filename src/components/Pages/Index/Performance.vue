<template lang="pug">
#Performance.container
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
  width: 80%
  margin-bottom: 50px
  display: flex
  flex-wrap: wrap
  justify-content: center
</style>
