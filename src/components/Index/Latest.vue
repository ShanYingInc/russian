<template lang="pug">
#latest
  .title 最新消息
  .list
    router-link.event(v-for="(event, index) in news", :key="index", v-if="index < 6", :to="`/news/${event.news_id}`")
      .type #[span {{ getNewsType(event.type) }}]
      .title {{ event.title }}
      .date {{ new Date(event.created_on).toLocaleDateString() }}
</template>
<script>
const newsTypes = {
  school: "校內公告",
  speech: "校內公告",
  recruitment: "企業徵才",
  scholarship: "獎助學金",
  enrollment: "招生資訊",
  others: "其他訊息"
}

import { mapState } from 'vuex'

export default {
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
<style lang="sass">
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css)

#latest
  width: 1200px
  margin: 20px auto
  background: rgb(255, 255, 255)
  padding: 1%
  border-radius: 5px
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
  .title
    font-size: 2em
    font-family: 'Noto Sans TC', sans-serif
    color: black
  .list
    display: flex
    flex-direction: row
    justify-content: center
    flex-wrap: wrap
    margin: 10px 10px
    .event
      width: 100%
      height: 75px
      background: rgba(255,255,255,0.9)
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4)
      position: relative
      display: flex
      margin: 0 0 15px 0
      transition: box-shadow .3s
      &:hover
        box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.6)
      .type
        flex: 100px
        background: rgb(0, 87, 146)
        display: flex
        align-items: center
        justify-content: center
        font-family: 'Noto Sans TC', sans-serif
      .title
        flex: 999
        padding: 10px
        color: black
        font-size: 1.2em
        text-align: left
        font-family: 'Noto Sans TC', sans-serif
      .date
        padding: 10px
        flex: 100px
        color: gray
        font-family: 'Noto Sans TC', sans-serif
        
</style>
