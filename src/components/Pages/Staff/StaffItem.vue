<template lang="pug">
#staffItem
  img(:src="pictureUrl(staffData.image.path)")
  h2 {{ staffData.name }}
  p {{ staffData.position }}
  div(v-html="staffData.teaching_lessons")
  p {{ staffData.email }}
  p {{ staffData.telephone }}
</template>
<script>
const defaultAvatar = require('../../../assets/default_avatar.png')

export default {
  name: 'StaffItem',
  props: {
    staffData: {
      type: Object,
      required: true
    }
  },
  methods: {
    pictureUrl (staffDataImagePath) {
      if (staffDataImagePath == '') return defaultAvatar
      else return this.$api.rootLink + staffDataImagePath
    }
  }
}
</script>
<style lang="sass" scoped>
#staffItem
  display: flex
  flex-direction: column
  z-index: 99
  padding: 20px
  width: $staff-item-width
  margin: 0px auto 30px
  background: white
  break-inside: avoid
  background: rgba(255, 255, 255, 0.9)
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.4)
  transition: box-shadow .2s
  border-radius: 4px
  // white-space: pre
  @include breakpoint(pc)
    &:hover
      box-shadow: 6px 12px 15px rgba(0, 0, 0, 0.6)
  @include breakpoint(mobile)
  img
    width: 100%
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.4)
    border-radius: 4px
    margin: 0 0 10px
</style>
