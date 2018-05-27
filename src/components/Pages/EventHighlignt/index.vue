<template lang="pug">
#eventHighlight
  h1 活動花絮
  router-link.item(
    v-for="(album, index) in albums",
    :key="album.album_id",
    :to="`/album/` + album.album_id"
  ) {{ album.title }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'EventHightlight',
  computed: {
    ...mapState({
      albums: state => state.album
    })
  }
}
</script>
<style lang="sass" scoped>
#eventHighlight
  padding: 20px 0 0
  h1
    text-align: center
  .item
    display: flex
    margin: 20px auto
    padding: 10px
    background: rgba(255, 255, 255, 0.8)
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4)
    transition: box-shadow .2s
    border-radius: 4px
    color: black
    text-align: left
    align-self: center
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
    font-size: 1.6em
    font-weight: 600
    text-decoration: none
    @include breakpoint(pc)
      width: 80vw
      height: 60px
      &:hover
        box-shadow: 6px 12px 30px rgba(0, 0, 0, 0.6)
    @include breakpoint(mobile)
      width: 95vw
      height: 60px
</style>
