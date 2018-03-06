<template lang="pug">
#teachingExcellenceYear
  h1 {{ TeachingExcellenceYear }}學年度
  .item(v-for="(item, index) in items", key="item.teaching_excellence_id")
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
#teachingExcellenceYear
  margin: 20px auto
  width: 70%
  .item
    margin: 20px auto
    padding: 10px
    background: rgba(255, 255, 255, 0.6)
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6)
    border-radius: 5px
    h3
      color: black
      text-align: left
</style>
