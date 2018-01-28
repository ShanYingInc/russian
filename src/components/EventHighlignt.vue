<template lang="pug">
#eventHighlight
  .album(v-for="(album, index) in albums", key="index")
    router-link(:to="`/album/` + album.album_id") #[h3.title {{ album.title }}]
    .content {{ album.content }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      albums: state => state.album
    })
  }
}
</script>
<style lang="sass" scoped>
#eventHighlight
  .album
    width: 70%
    margin: 20px auto
    padding: 10px
    background: rgba(255, 255, 255, 0.6)
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6)
    border-radius: 5px
    h3
      color: black
      text-align: left
</style>
