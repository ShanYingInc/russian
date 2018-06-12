<template lang="pug">
#News
  .news-container
    h3.title {{ newsItem.title }}
    p.date {{ new Date(newsItem.created_on).toLocaleDateString() }}
    hr
    .content(v-html="newsItem.content")
    .back
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    newsId: String
  },
  computed: {
    ...mapState({
      news: state => state.news
    }),
    newsItem () {
      const self = this
      if (this.news.length !== 0) {
        const newsItem = this.news.filter(event => {
          return event.news_id === Number(self.newsId)
        })[0]
        console.log(newsItem)
        return newsItem
      }
      return {content: '<h1>讀取中</h1>'}
    }
  }
}
</script>
<style lang="sass" scoped>
#News
  @include breakpoint(pc)
    padding: 20px 0 0
  @include breakpoint(mobile)
    width: 100%
  .news-container
    @include main-content
    .back
    .title
    .content

</style>
