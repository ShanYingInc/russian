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
      color: black
      padding: 10px 15px
      margin: 5px 5px
      text-decoration: none
      border-radius: 2px
      font-weight: 600
      font-size: 1.2em
      white-space: nowrap
      @include switch-transition(#aaaaaa, #dcdcdc)
  .content
    @include main-content
</style>
