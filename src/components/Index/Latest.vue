<template lang="pug">
#latest
  .title 最新消息
  .list
    .news(v-for="(event, index) in news", :key="index", v-if="index < 6")
      router-link.title(:to="`/news/` + event.news_id") {{ event.title }}
      .type {{ event.type }}
      .date {{ new Date(event.created_on).toLocaleDateString() }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
  }
}
</script>
<style lang="sass">
#latest
  width: 70%
  margin: 20px auto
  background: rgba(255, 255, 255, 0.4)
  padding: 1%
  border-radius: 5px
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
  .list
    display: flex
    flex-wrap: wrap
    .news
      flex: 0 47%
      background: white
      padding: 10px
      margin: 10px
      display: flex
      flex-direction: column
      .date, .title, .content, .type
        margin: 10px
      .title
        text-align: left
      a
        font-size: 20px
</style>
