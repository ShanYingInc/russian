<template lang='pug'>
#highlights
  Slider
  .pictures
    .event(v-for="i in 10") 標題
</template>

<script>
import { api } from '../../../../api'
import Slider from '../Slider'

export default {
  data () {
    return {
      content: '<p>讀取中</p>'
    }
  },
  mounted () {
    this.$nextTick(() => {
      api.content.get().then(data => {
        this.content = data.highlights[0]
      })
    })
  }
}
</script>

<style lang="sass">
#highlights
  // width: 70%
  // text-align:left
  // animation: fadein 2s
  // margin: 20px auto
  display: flex
  .pictures
    flex-grow: 999
    display: flex
    flex-direction: column
    margin: 50px 0 0 10px
    align-items: stretch
    .event
      background: rgba(255, 255, 255, 0.8)
      padding: 10px
      margin: 10px
</style>
