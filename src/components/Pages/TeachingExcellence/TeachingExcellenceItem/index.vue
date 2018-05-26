<template lang="pug">
#teachingExcellenceItem
  .item(v-if="item")
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
  @include breakpoint(pc)
    margin: 20px auto 0px
  @include breakpoint(mobile)
    margin: 0px
  .item
    @include main-content
</style>
