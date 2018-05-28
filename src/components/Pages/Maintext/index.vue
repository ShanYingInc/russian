<template lang="pug">
#maintext
  .switch
    router-link(v-for="key in switchList.subItems", :to='`/content?parent=`+parent+`&contentKey=`+key.content_key', :key="key.content_key") {{ key.name }}
  transition(name="fade")
    .content(v-html="contentText", :key="contentText")

</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['parent', 'contentKey'],
  computed: {
    ...mapState({
      navigations: state => state.navigation,
      contents: state => state.content
    }),
    switchList () {
      if (this.navigations.length !== 0) {
        return this.navigations.filter(nav => {
          return nav.name == this.parent
        })[0]
      }
      return {subItems: []}
    },
    contentText () {
      if (this.contents[this.contentKey])
        return this.contents[this.contentKey][0]
      return ''
    }
  }
}
</script>


<style lang="sass" scoped>
#maintext
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
  .content
    @include main-content
</style>
