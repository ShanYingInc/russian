<template lang="pug">
#member
  .switch
    .type
      router-link(to="/Staff/Fulltime") 專任師資
    .type
      router-link(to="/Staff/Parttime") 兼任師資
    .type
      router-link(to="/Staff/Director") 歷屆系主任
    .type
      router-link(to="/Staff/Administrative") 行政人員
    .type
      router-link(to="/Staff/Tutor") 各班導師
  .member-container
    .member-item(v-for='(member, index) in filterList', :key='index')
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
    display: flex
    flex-direction: row
    justify-content: center
    margin: 30px 0
    .type
      display: inline-block
      a
            box-shadow: 1px 2px 4px rgba(0, 0, 0, .5)
            text-decoration: none
            color: #333
            padding: 10px 20px
            background: #ccc
            transition: color 0.1s, background-color 0.1s
            letter-spacing: 1px
            font-weight: 900
            position: relative
            &:hover, &:focus, &:active
                background: #eee
                // color: #999
            &::before
                content: ''
                display: block
                position: absolute
                bottom: 0px
                left: 0
                height: 3px
                width: 100%
                background-color: #000
                transform-origin: right top
                transform: scale(0, 1)
                transition: color 0.1s,transform 0.2s ease-out
            &:active::before
                background-color: #000
            &:hover::before, &:focus::before
                transform-origin: left top
                transform: scale(1, 1)
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
