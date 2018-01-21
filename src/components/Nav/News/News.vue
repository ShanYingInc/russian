<template lang="pug">
#news
  .event(v-for="event in news")
    h3.title {{ event.title }}
    p.type {{ event.type }}
    p.date {{ new Date(event.created_on).toLocaleDateString() }}
    p.content {{ event.content }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      news: state => state.news.data
    })
  }
}
</script>
<style lang="sass">
#news
  display: flex
  flex-direction: column
  .event
    background: rgba(255,255,255,0.9)
    padding: 20px
    margin: 20px
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4)
    h3
      text-align: left
</style>
