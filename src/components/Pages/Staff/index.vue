<template lang="pug">
#member
  .switch
    router-link(to="/Staff/Fulltime") 專任師資
    router-link(to="/Staff/Parttime") 兼任師資
    router-link(to="/Staff/Director") 歷屆系主任
    router-link(to="/Staff/Administrative") 行政人員
    router-link(to="/Staff/Tutor") 各班導師
  transition-group.member-container(name="fade", mode="out-in", tag="div")
    //- TODO: 改進為waterfall排版
    .member-item(v-for='(member, index) in filterList', :key='member.name')
      .pic
        img(:src="$api.rootLink + member.image.path" height="150")
      .text
        h2 {{ member.name }}
        p {{ member.position }}
        div(v-html="member.teaching_lessons")
        p {{ member.email }}
        p {{ member.telephone }}
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    type: String
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      members: state => state.staff
      // type: state => state.staffType
    }),
    filterList () {
      return this.members.filter(member => {
        return member.type === this.type
      })
    }
  },
  methods: {
    ...mapMutations({
      switchType: 'UPDATE_STAFF_TYPE'
    })
  }
}
</script>

<style lang="sass">
#member
  display: flex
  flex-direction: column
  margin: 10px
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
  .member-container
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    .member-item
      margin: 0 20px 20px 0
      border: 2px black solid
      display: flex
      flex-direction: column
      width: 250px
      height: 400px
      background: white
      // border: 1px solid #ddd
      padding: 20px 20px
      .pic
        align-self: center
      .text
</style>
