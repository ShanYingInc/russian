<template lang="pug">
#news
  .event(v-for="event in news")
    router-link.title(:to="`/news/` + event.news_id") #[h3 {{ event.title }}]
    p.type {{ event.type }}
    p.date {{ new Date(event.created_on).toLocaleDateString() }}
    //- p.content {{ event.content }}
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
#news
  width: 70%
  margin: 0 auto
  display: flex
  flex-direction: column
  .event
    width: 100%
    background: rgba(255,255,255,0.9)
    padding: 20px
    margin: 20px
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4)
    .title
      text-align: left
</style>
