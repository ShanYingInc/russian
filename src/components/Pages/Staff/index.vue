<template lang="pug">
#staff
  .switch
    router-link(to="/Staff/Fulltime") 專任師資
    router-link(to="/Staff/Parttime") 兼任師資
    router-link(to="/Staff/Director") 歷屆系主任
    router-link(to="/Staff/Administrative") 行政人員
    router-link(to="/Staff/Tutor") 各班導師
  transition-group.staff-container(name="fade")
    StaffItem(
      v-for='(staff, index) in filterList',
      :key='staff.member_id',
      :staffData="staff"
    )
</template>
<script>
import StaffItem from './StaffItem'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Staff',
  components: {
    StaffItem
  },
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

<style lang="sass" scoped>
#staff
  display: flex
  flex-direction: column
  width: 100vw
  .switch
    padding: 10px 0px
    display: flex
    width: 100%
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
  .staff-container
    overflow: visible
    column-count: auto
    column-width: 300px
    column-gap: 0px
</style>
