<template lang="pug">
#introduction
  .switch
    router-link(to='/Introduction/Important') 重要記事
    router-link(to='/Introduction/Vision') 願景及策略
  transition(name="fade", mode="in-out")
    router-view
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Introduction',
  computed: {
    ...mapState({
      intro: 'introduction'
    })
  }
}
</script>

<style lang="sass" scoped>
#introduction
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
      margin: 3px 5px
      text-decoration: none
      border-radius: 2px
      font-weight: 600
      font-size: 1.2em
      white-space: nowrap
      @include switch-transition(#aaaaaa, #dcdcdc)
</style>
