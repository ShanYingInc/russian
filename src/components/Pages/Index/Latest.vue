<template lang="pug">
#latest
  h1 最新消息
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
  name: 'Latest',
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
    .event
      width: 100%
      background: rgba(255, 255, 255, 0.9)
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4)
      position: relative
      display: flex
      margin: 0 0 15px 0
      transition: box-shadow .2s
      border-radius: 4px
      text-decoration: none
      @include breakpoint(pc)
        height: 75px
        &:hover
          box-shadow: 6px 12px 30px rgba(0, 0, 0, 0.6)
      @include breakpoint(mobile)
        height: 60px
      .type
        background: $main-color
        display: flex
        align-items: center
        justify-content: center
        font-family: 'Noto Sans TC', sans-serif
        border-radius: 4px 0px 0px 4px
        color: white
        @include breakpoint(pc)
          flex: 100px
        @include breakpoint(mobile)
          flex: 50px
          padding: 9px
      .title
        flex: 999
        padding: 10px
        color: black
        text-align: left
        font-family: 'Noto Sans TC', sans-serif
        text-overflow: ellipsis
        overflow: hidden
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        font-weight: 500
        @include breakpoint(pc)
          font-size: 1.2em
          line-height: 1.5em
          height: 3.2em
        @include breakpoint(mobile)
          font-size: 1em
          line-height: 1.2em
          height: 3em
      .date
        @include breakpoint(pc)
          padding: 10px
          flex: 100px
          color: gray
          font-family: 'Noto Sans TC', sans-serif
        @include breakpoint(mobile)
          display: none

</style>
