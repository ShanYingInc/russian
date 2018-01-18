<template lang='pug'>
#highlights
  Slider
  .pictures
    .event
</template>
<script>
import { api } from '../../../../api'
import Slider from './Slider'

export default {
  components: {
    Slider
  },
  data () {
    return {
      content: '<p>讀取中</p>'
    }
  },
  mounted () {
    this.$nextTick(() => {
      // api.content.get().then(data => {
      //   this.content = data.highlights[0]
      // })
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
    display: flex
    flex-direction: column
    margin: 0 0 0 10px
    align-items: stretch
</style>
