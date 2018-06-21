<template lang="pug">
#staff
  .switch
    router-link(to="/Staff/Fulltime") {{ $t('staff.full_time_professors') }}
    router-link(to="/Staff/Parttime") {{ $t('staff.part_time_professors') }}
    router-link(to="/Staff/Director") {{ $t('staff.chairperson') }}
    router-link(to="/Staff/Administrative") {{ $t('staff.staff') }}
    router-link(to="/Staff/Tutor") {{ $t('staff.advisor') }}
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
    column-width: $staff-item-width
    column-gap: 10px
</style>
