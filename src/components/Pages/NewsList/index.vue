<template lang="pug">
#news
  .category
    button.all(
      type="button",
      @click="switchCategory(`all`)"
    ) 全部新聞
    button.school(
      type="button",
      @click="switchCategory(`school`)"
    ) 校內公告
    button.speech(
      type="button",
      @click="switchCategory(`speech`)"
    ) 活動演講
    button.enrollment(
      type="button",
      @click="switchCategory(`enrollment`)"
    ) 招生資訊
    button.recruitment(
      type="button",
      @click="switchCategory(`recruitment`)"
    ) 企業徵才
    button.scholarship(
      type="button",
      @click="switchCategory(`scholarship`)"
    ) 獎助學金
    button.others(
      type="button",
      @click="switchCategory(`others`)"
    ) 其他訊息
  .list
    NewsItem(
      v-for="newsItem in filterList",
      :key="newsItem.news_id",
      :newsItem="newsItem"
    )
  .panigation(
    role="group",
    aria-label="Basic example"
  )
    button.first(
      type="button",
      @click="switchPage(1)",
      :disabled='pageNumber == 1'
    )
      i.fas.fa-fast-backward
    button.previous(
      type="button",
      @click="switchPage(previousPageNumber)",
      :disabled='pageNumber == 1'
    )
      i.fas.fa-backward
    button.next(
      type="button",
      @click="switchPage(nextPageNumber)",
      :disabled='pageNumber == lastPageNumber'
    )
      i.fas.fa-forward
    button.last(
      type="button",
      @click="switchPage(lastPageNumber)",
      :disabled='pageNumber == lastPageNumber'
    )
      i.fas.fa-fast-forward
</template>
<script>
import NewsItem from './NewsItem'
import { mapState } from 'vuex'

export default {
  name: 'NewsList',
  components: {
    NewsItem
  },
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
      &.all
        $background-normal-color: #4c83c3
        $background-hover-color: #80b2f6
        @include switch-category-transition($background-normal-color, $background-hover-color)
      &.school
        $background-normal-color: #f44336
        $background-hover-color: #ff7961
        @include switch-category-transition($background-normal-color, $background-hover-color)
      &.speech
        $background-normal-color: #9c27b0
        $background-hover-color: #d05ce3
        @include switch-category-transition($background-normal-color, $background-hover-color)
      &.enrollment
        $background-normal-color: #2196f3
        $background-hover-color: #6ec6ff
        @include switch-category-transition($background-normal-color, $background-hover-color)
      &.recruitment
        $background-normal-color: #4caf50
        $background-hover-color: #80e27e
        @include switch-category-transition($background-normal-color, $background-hover-color)
      &.scholarship
        $background-normal-color: #fdd835
        $background-hover-color: #ffeb3b
        @include switch-category-transition($background-normal-color, $background-hover-color)
      &.others
        $background-normal-color: #ff9800
        $background-hover-color: #ffc947
        @include switch-category-transition($background-normal-color, $background-hover-color)
  .list
    display: flex
    flex-direction: column
    margin: 0px auto
    @include breakpoint(pc)
      width: 80vw
    @include breakpoint(mobile)
      width: 95vw
  .panigation
    display: flex
    @include breakpoint(pc)
      width: 80vw
      margin: 0px auto
    @include breakpoint(mobile)
      width: 90%
      margin: 0px auto 20px
    button
      width: 100%
      padding: 10px
      font-size: 1.5em
      background: $main-color
      color: white
      border: none
      &:disabled
        background: $sub-light-color
        cursor: not-allowed
      &.first
        border-radius: 4px 0 0 4px
      &.last
        border-radius: 0 4px 4px 0

</style>
