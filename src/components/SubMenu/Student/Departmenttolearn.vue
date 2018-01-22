<template>
  <div id="departmenttolearn">
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
      content: '<h3>學生相關</h3>'
    }
  },
  mounted () {
    this.$nextTick(() => {
       api.content.get().then(data => {
         console.log(data)
         this.content = data.系學會[0]
       })
    })
  }
}
</script>

<style lang="sass">
#departmenttolearn
  // width: 70%
  width: 100%
  display: flex
  text-align:left
  // animation: fadein 2s
  // margin: 20px auto
  .content
    width: 100%
    flex-grow: 999
    padding: 20px 50px
    // border: 1px solid #ccc
    margin: 50px 20px 0 20px
    border-radius: 5px
    background: rgba(255, 255, 255, 0.8)
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
@keyframes fadein
  from
    opacity: 0
  to
    opacity: 1
</style>
