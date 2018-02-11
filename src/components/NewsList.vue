<template lang="pug">
#news
  .event(v-for="event in news")
    .left
      .type {{ event.type }}
      router-link.title(:to="`/news/` + event.news_id") #[span {{ event.title }}]
    .right
      span.date {{ new Date(event.created_on).toLocaleDateString() }}
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
  margin: 20px auto
  display: flex
  flex-direction: column
  .event
    width: 100%
    background: rgba(255,255,255,0.9)
    padding: 20px
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4)
    position: relative
    display: flex
    justify-content: space-between
    .left
      display: flex
      flex-direction: row
      .type
        margin: 0 10px 0 0
        padding: 5px
        border-radius: 2px
        background: green
        color: white
        width: 70px
        text-align: center
        font-weight: 900
      .title
        text-align: left
        color: rgba(0, 0, 0, 0.6)
        align-self: center
        font-weight: 900
    .right
      align-self: center
    &:after
      content: ''
      width: 100%
      border-bottom: solid 1px rgba(0, 0, 0, 0.4)
      position: absolute
      bottom: 0
      left: 0
      // z-index: 1
</style>
