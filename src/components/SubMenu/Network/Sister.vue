<template>
  <div id="sister">
    <div class="content">
    <div v-html="content"></div>
  </div>
</div>
</template>

<script>
import { api } from '../../../api'

export default {
  data () {
    return {
      content: '<p>讀取中</p>'
    }
  },
  mounted () {
    this.$nextTick(() => {
      api.content.get().then(data => {
        this.content = data.姐妹校[0]
      })
    })
  }
}
</script>

<style lang="sass">
#sister
  width: 70%
  text-align:left
  animation: fadein 2s
  margin: 20px auto
  .content
    padding: 20px 50px
    // border: 1px solid #ccc
    border-radius: 5px
    background: rgba(255, 255, 255, 0.8)
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
@keyframes fadein
  from
    opacity: 0
  to
    opacity: 1
</style>