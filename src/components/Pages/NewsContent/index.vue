<template lang="pug">
#News
  //- TODO: 新增標題&返回上一級
  .back
  .content(v-html="content")
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
#News
  .back
    width: 100vw
    height: 20px
  .content
    @include main-content
</style>
