<template lang="pug">
#news
  .switch
    a(href="#", @click="switchType(`all`)") 全部新聞
    a(href="#", @click="switchType(`school`)") 校內公告
    a(href="#", @click="switchType(`speech`)") 活動演講
    a(href="#", @click="switchType(`enrollment`)") 招生資訊
    a(href="#", @click="switchType(`recruitment`)") 企業徵才
    a(href="#", @click="switchType(`scholarship`)") 獎助學金
    a(href="#", @click="switchType(`others`)") 其他訊息
  .list
    router-link.event(v-for="event in filterList", :key="event.event_id", :to="`/news/` + event.news_id")
      .type #[span {{ getNewsType(event.type) }}]
      .title {{ event.title }}
      .date {{ new Date(event.created_on).toLocaleDateString() }}
  //-   .page.first 第一頁
  //-   .page.previous 上一頁
  //-   .page(v-for="number in 5") {{ number }}
  //-   .page.next 下一頁
  //-   .page.last 最後一頁
</template>
<script>
const newsTypes = {
  school: "校內公告",
  speech: "校內公告",
  enrollment: "招生資訊",
  recruitment: "企業徵才",
  scholarship: "獎助學金",
  others: "其他訊息"
}

import { mapState } from 'vuex'

export default {
  name: 'NewsList',
  data () {
    return {
      newsType: 'all'
    }
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
<style lang="sass">
#news
  width: 100vw
  margin: 0px auto
  display: flex
  flex-direction: column
  .switch
    padding: 10px 0px
    display: flex
    width: 100vw
    @include breakpoint(pc)
      flex-wrap: wrap
      justify-content: center
    @include breakpoint(mobile)
      justify-content: flex-start
      overflow: scroll
      flex-wrap: nowrap
    a
      color: black
      padding: 10px 15px
      margin: 5px 5px
      text-decoration: none
      border-radius: 2px
      font-weight: 600
      font-size: 1.2em
      white-space: nowrap
      @include switch-transition(#aaaaaa, #dcdcdc)
  .list
    display: flex
    width: 100vw
    flex-direction: column
    margin: 0px auto
    .event
      background: rgba(255, 255, 255, 0.9)
      box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4)
      position: relative
      display: flex
      margin: 0px auto 15px
      transition: box-shadow .2s
      border-radius: 4px
      text-decoration: none
      @include breakpoint(pc)
        height: 75px
        width: 80%
        &:hover
          box-shadow: 6px 12px 30px rgba(0, 0, 0, 0.6)
      @include breakpoint(mobile)
        height: 60px
        width: 95%
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
