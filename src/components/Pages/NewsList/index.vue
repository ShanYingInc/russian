<template lang="pug">
#news
  .category
    button.all(type="button", @click="switchCategory(`all`)") 全部新聞
    button.school(type="button", @click="switchCategory(`school`)") 校內公告
    button.speech(type="button", @click="switchCategory(`speech`)") 活動演講
    button.enrollment(type="button", @click="switchCategory(`enrollment`)") 招生資訊
    button.recruitment(type="button", @click="switchCategory(`recruitment`)") 企業徵才
    button.scholarship(type="button", @click="switchCategory(`scholarship`)") 獎助學金
    button.others(type="button", @click="switchCategory(`others`)") 其他訊息
  .list
    router-link.event(v-for="event in filterList", :key="event.event_id", :to="`/news/` + event.news_id")
      .type #[span {{ getNewsType(event.type) }}]
      .title {{ event.title }}
      .date {{ new Date(event.created_on).toLocaleDateString() }}
  .panigation(role="group", aria-label="Basic example")
    button.first(type="button", @click="switchPage(1)") 第一頁
    button.previous(type="button", @click="switchPage(previousPageNumber)") 上一頁
    button.next(type="button", @click="switchPage(nextPageNumber)") 下一頁
    button.last(type="button", @click="switchPage(lastPageNumber)") 最後一頁
</template>
<script>
const newsTypes = {
  school: "校內公告",
  speech: "活動演講",
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
      newsType: 'all',
      pageNumber: 1
    }
  },
  computed: {
    ...mapState({
      news: state => state.news
    }),
    filterList () {
      const firstItemIndex = (this.pageNumber - 1) * 10
      const lastItemIndex = (this.pageNumber * 10) - 1
      if (this.newsType !== 'all') {
        return this.news.filter(news => {
          return news.type === this.newsType
        }).slice(firstItemIndex, lastItemIndex)
      }
      else {
        return this.news.slice(firstItemIndex, lastItemIndex)
      }
    },
    previousPageNumber () {
      const previousPageNumber = this.pageNumber - 1
      if (previousPageNumber > 0) return previousPageNumber
      else return 1
    },
    nextPageNumber() {
      const nextPageNumber = this.pageNumber + 1
      if (nextPageNumber < this.lastPageNumber) return nextPageNumber
      else return this.lastPageNumber
    },
    lastPageNumber () {
      if (this.newsType !== 'all') {
        return Math.ceil(this.news.filter(news => {
          return news.type === this.newsType
        }).length / 10)
      }
      else {
        return Math.ceil(this.news.length / 10)
      }
    }
  },
  methods: {
    async switchCategory (type) {
      this.pageNumber = 1
      this.newsType = await type
    },
    getNewsType (rawType) {
      return newsTypes[rawType]
    },
    async switchPage (pageNumber) {
      if (pageNumber > 0) this.pageNumber = await pageNumber
      else this.pageNumber = 1
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
  .category
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
    button
      border: none
      $background-normal-color: #aaaaaa
      $background-hover-color: #dcdcdc
      @include switch-category-transition(#aaaaaa, #dcdcdc)
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
  .panigation
    display: flex
    @include breakpoint(pc)
      width: 80vw
      margin: 0px auto
    @include breakpoint(mobile)
      flex-direction: column
      width: 100%
      margin: 0px 20px
    button
      width: 100%
      padding: 10px
      font-size: 1.5em
      background: $main-color
      color: white
      border: none

</style>
