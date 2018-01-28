<template lang="pug">
#News.content-container
  .content {{ content }}
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
    content () {
      const self = this
      if (this.news.length !== 0) {
        return this.news.filter(event => {
          return event.news_id === Number(self.newsId)
        })[0].content
      }
      return '讀取中'
    }
  }
}
</script>
<style lang="sass" scoped>
.content-container
  width: 70%
  height: 100%
  text-align:left
  animation: fadein 2s
  margin: 20px auto
  .content
    padding: 20px 50px
    border-radius: 5px
    background: rgba(255, 255, 255, 0.8)
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
</style>
