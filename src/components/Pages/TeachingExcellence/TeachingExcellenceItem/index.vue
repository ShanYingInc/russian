<template lang="pug">
#teachingExcellenceItem
  div(v-if="item")
    h1 {{ item.title }}
    h3 {{ item.year }} 學年度
    .content(v-html="item.content")
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    TeachingExcellenceId: String
  },
  computed: {
    ...mapState({
      teachingExcellence: state => state.teachingExcellence
    }),
    item () {
      if (this.TeachingExcellenceId) {
        const itemId = Number(this.TeachingExcellenceId)
        return this.teachingExcellence.filter(item => {
          return item.teaching_excellence_id === itemId
        })[0]
      }
    }
  }
}
</script>
<style lang="sass" scoped>
#teachingExcellenceItem
  width: 70%
  height: 100%
  animation: fadein 2s
  margin: 20px auto
  background: rgba(255, 255, 255, 0.8)
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
  padding: 20px 50px
  border-radius: 5px
</style>
