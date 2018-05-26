<template lang="pug">
#teachingExcellenceList
  h1 {{ TeachingExcellenceYear }}學年度
  .item(v-for="(item, index) in items", :key="item.teaching_excellence_id")
    router-link(:to="`/TeachingExcellenceItem/` + item.teaching_excellence_id") #[h3 {{ item.title }}]
</template>
<script>
import { mapState } from 'vuex'

export default {
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
  margin: 20px auto
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
    @include breakpoint(pc)
      width: 80vw
      height: 60px
      &:hover
        box-shadow: 6px 12px 30px rgba(0, 0, 0, 0.6)
    @include breakpoint(mobile)
      width: 95vw
      height: 60px
    h3
      color: black
      text-align: left
      align-self: center
</style>
