<template lang="pug">
router-link#newsItem(:to="`/news/${newsItem.news_id}`")
  .type(:style="{ background: newsCategoryColor }") {{ $t(newsCategoryName) }}
  .title {{ newsItem.title }}
  .date {{ new Date(newsItem.created_on).toLocaleDateString() }}
</template>
<script>
const newsCategory = {
  school: {
    name: "newsCategory.school",
    color: "#f44336",
    hover: "#ff7961"
  },
  speech: {
    name: "newsCategory.speech",
    color: "#9c27b0",
    hover: "#d05ce3"
  },
  enrollment: {
    name: "newsCategory.enrollment",
    color: "#2196f3",
    hover: "#6ec6ff"

  },
  recruitment: {
    name: "newsCategory.recruitment",
    color: "#4caf50",
    hover: "#80e27e"
  },
  scholarship: {
    name: "newsCategory.scholarship",
    color: "#fdd835",
    hover: "#ffeb3b"
  },
  others: {
    name: "newsCategory.others",
    color: "#ff9800",
    hover: "#ffc947"
  }
}

export default {
  name: 'NewsItem',
  props: {
    newsItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    newsCategoryName () {
      return newsCategory[this.newsItem.type].name
    },
    newsCategoryColor () {
      return newsCategory[this.newsItem.type].color
    }
  }
}
</script>
<style lang="sass" scoped>
#newsItem
  background: rgba(255, 255, 255, 0.9)
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4)
  position: relative
  display: flex
  margin: 0px auto 15px
  transition: box-shadow .2s
  border-radius: 4px
  text-decoration: none
  width: 100%
  @include breakpoint(pc)
    height: 75px
    &:hover
      box-shadow: 6px 12px 30px rgba(0, 0, 0, 0.6)
  @include breakpoint(mobile)
    height: 70px
    width: 95%
    flex-direction: column
  .type
    background: $main-color
    display: flex
    align-items: center
    justify-content: center
    font-family: 'Noto Sans TC', sans-serif
    color: white
    font-weight: 600
    @include breakpoint(pc)
      border-radius: 4px 0px 0px 4px
      font-size: 1.2em
      flex: 150px
    @include breakpoint(mobile)
      border-radius: 4px 4px 0px 0px
      font-size: .8em
      padding: 3px
  .title
    flex: 999
    padding: 10px
    color: black
    text-align: left
    font-family: 'Noto Sans TC', sans-serif
    text-overflow: ellipsis
    overflow: hidden
    @include breakpoint(pc)
      font-size: 1.2em
      line-height: 1.5em
      height: 3.2em
      text-overflow: ellipsis
      overflow: hidden
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
    @include breakpoint(mobile)
      font-size: 1.2em
      line-height: 1.2em
      height: 1.2em
      white-space: nowrap
  .date
    @include breakpoint(pc)
      padding: 10px
      flex: 100px
      color: gray
      font-family: 'Noto Sans TC', sans-serif
    @include breakpoint(mobile)
      display: none
</style>
