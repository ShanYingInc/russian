<template lang="pug">
#latest
  h1 最新消息
  .list
    NewsItem(v-for="(newsItem, index) in news", :key="index", v-if="index < 6", :newsItem="newsItem")
</template>
<script>
import NewsItem from '../NewsList/NewsItem'
import { mapState } from 'vuex'

export default {
  name: 'Latest',
  components: {
    NewsItem
  },
  computed: {
    ...mapState({
      news: state => state.news
    }),
    filterList () {
      if (this.newsType !== 'all') {
        return this.news.filter(news => {
          return news.type === this.newsType
        })
      }
      else {
        return this.news
      }
    }
  },
  methods: {
    async switchType(type) {
      this.newsType = await type
    },
    getNewsType(rawType) {
      return newsTypes[rawType]
    }
  }
}
</script>
<style lang="sass" scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css)

#latest
  display: flex
  flex-direction: column
  justify-content: center
  background: $background-color
  @include breakpoint(pc)
    width: 80vw
    margin: 20px auto
    border-radius: 5px
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
    padding: 20px
  @include breakpoint(mobile)
    margin: 0px 0px
    width: 100vw
    padding: 10px
  h1
    text-align: center
    font-weight: 700
    @include breakpoint(mobile)
      font-size: 2em
  .list
    display: flex
    flex-direction: row
    justify-content: center
    text-align:center
    flex-wrap: wrap
    margin: 0px 0px
</style>
