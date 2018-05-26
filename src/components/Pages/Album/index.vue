<template lang="pug">
#album
  .item
    h2.title {{ album.title }}
    .content(v-html="album.content")
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    albumId: String
  },
  computed: {
    ...mapState({
      albums: state => state.album
    }),
    album () {
      const self = this
      return this.albums.filter(album => {
        return album.album_id === Number(self.albumId)
      })[0]
    }
  },
  methods: {
    ...mapActions(['ApiRootLink'])
  }
}
</script>
<style lang="sass" scoped>
#album
  margin: 20px auto 0px
  .item
    @include main-content
</style>
