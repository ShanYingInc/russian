<template lang="pug">
#teachingExcellenceList
  h1 {{ TeachingExcellenceYear }}學年度
  router-link.item(
    v-for="(item, index) in items",
    :key="item.teaching_excellence_id",
    :to="`/TeachingExcellenceItem/` + item.teaching_excellence_id"
  ) {{ item.title }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'TeachingExcellenceList',
  props: {
    TeachingExcellenceYear: String
  },
  computed: {
    ...mapState({
      teachingExcellence: state => state.teachingExcellence
    }),
    items () {
      if (this.TeachingExcellenceYear) {
        const year = Number(this.TeachingExcellenceYear)
        return this.teachingExcellence.filter(item => {
          return item.year === year
        })
      }
    }
  }
}
</script>
<style lang="sass" scoped>
#teachingExcellenceList
  padding: 20px 0 0
  h1
    text-align: center
  .item
    display: flex
    margin: 20px auto
    padding: 10px
    background: rgba(255, 255, 255, 0.8)
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4)
    transition: box-shadow .2s
    border-radius: 4px
    color: black
    text-align: left
    align-self: center
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
    font-size: 1.6em
    font-weight: 600
    text-decoration: none
    @include breakpoint(pc)
      width: 80vw
      height: 60px
      &:hover
        box-shadow: 6px 12px 30px rgba(0, 0, 0, 0.6)
    @include breakpoint(mobile)
      width: 95vw
      height: 60px
</style>
