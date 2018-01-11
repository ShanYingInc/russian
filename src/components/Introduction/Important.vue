<template>
  <div id="important">
    <div class="content">
      <div v-html="content"></div>
    </div>
  </div>
</template>
<script>
import { api } from '../../api'

export default {
  data () {
    return {
      content: '<p>讀取中</p>'
    }
  },
  mounted () {
    this.$nextTick(() => {
      api.content.get().then(data => {
        this.content = data.important[0]
      })
    })
  }
}
</script>

<style lang="sass">
#important
  width: 70%
  height: 100%
  text-align:left
  animation: fadein 2s
  margin: 20px auto
  .content
    padding: 20px 50px
    // border: 1px solid #ccc
    border-radius: 5px
    background: rgba(255, 255, 255, 0.4)
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
@keyframes fadein
  from
    opacity: 0
  to
    opacity: 1
</style>