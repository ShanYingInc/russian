<template lang="pug">
#introduction
  .switch
    router-link(to='/Introduction/Important') 重要記事
    router-link(to='/Introduction/Vision') 願景及策略
  transition(name="fade")
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
      $background-normal-color: #4c83c3
      $background-hover-color: #80b2f6
      @include switch-category-transition($background-normal-color, $background-hover-color)
</style>
