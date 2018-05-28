<template lang="pug">
router-link#newsItem(:to="`/news/${NewsItem.news_id}`")
  .type(:style="{ background: newsCategoryColor }") #[span {{ $t(newsCategoryName) }}]
  .title {{ NewsItem.title }}
  .date {{ new Date(NewsItem.created_on).toLocaleDateString() }}
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
    color: "#ffeb3b",
    hover: "#ffff72"
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
    newsData: {
      type: Object,
      required: true
    }
  },
  computed: {
    newsCategoryName () {
      return newsCategory[this.newsData.type].name
    },
    newsCategoryColor () {
      return newsCategory[this.newsData.type].color
    }
  }
}
</script>
<style lang="sass" scoped>
#newsItem
</style>
