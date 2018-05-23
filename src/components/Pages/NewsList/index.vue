<template lang="pug">
#news
  .switch
    .type
      a(href="#", @click="switchType(`all`)") 全部新聞
    .type
      a(href="#", @click="switchType(`school`)") 校內公告
    .type
      a(href="#", @click="switchType(`speech`)") 活動演講
    .type
      a(href="#", @click="switchType(`enrollment`)") 招生資訊
    .type
      a(href="#", @click="switchType(`recruitment`)") 企業徵才
    .type
      a(href="#", @click="switchType(`scholarship`)") 獎助學金
    .type
      a(href="#", @click="switchType(`others`)") 其他訊息
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
  width: 70%
  margin: 20px auto
  display: flex
  flex-direction: column
  .switch
    display: flex
    flex-direction: row
    justify-content: center
    margin: 30px 0
    .type
      display: inline-block
      a
        box-shadow: 1px 2px 4px rgba(0, 0, 0, .5)
        text-decoration: none
        color: #333
        padding: 10px 20px
        background: #ccc
        transition: color 0.1s, background-color 0.1s
        letter-spacing: 1px
        font-weight: 900
        position: relative
        &:hover, &:focus, &:active
            background: #eee
            // color: #999
        &::before
            content: ''
            display: block
            position: absolute
            bottom: 0px
            left: 0
            height: 3px
            width: 100%
            background-color: #000
            transform-origin: right top
            transform: scale(0, 1)
            transition: color 0.1s,transform 0.2s ease-out
        &:active::before
            background-color: #000
        &:hover::before, &:focus::before
            transform-origin: left top
            transform: scale(1, 1)
  .event
    width: 100%
    height: 75px
    background: rgba(255,255,255,0.9)
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4)
    position: relative
    display: flex
    margin: 0 0 15px 0
    transition: box-shadow .3s
    &:hover
      // background: rgba(200,200,200,0.9)
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.6)
    .type
      flex: 100px
      background: #C00000
      display: flex
      align-items: center
      justify-content: center
    .title
      flex: 999
      padding: 10px
      color: black
      font-size: 1.2em
      font-weight: 500
      font-family: 'Noto Sans TC', sans-serif
      text-align: left
      text-overflow: ellipsis
      overflow: hidden
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.5em
      height: 3.2em
    .date
      padding: 10px
      flex: 100px
      color: gray
  .panigation
    margin: 20px auto
    display: flex
    flex-direction: row
    position: relative
    .page
      background: rgba(255,255,255,0.9)
      padding: 20px
      box-shadow: 5px 5px 5px rgba(0,0,0,0.4)
      &:not(:last-child):after
        content: ''
        margin: 0 20px
        width: 1px
        height: 100%
        border-right: solid 1px rgba(0, 0, 0, 0.4)
        position: absolute
        bottom: 0
        top: 0

</style>
