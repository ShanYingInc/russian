<template lang="pug">
#album
  h2.title {{ album.title }}
  p.content {{ album.content }}
  img(v-for="(image, index) in album.images", key="index", :src="createPath(image.path)", height="300px")
</template>
<script>
import { mapState } from 'vuex'

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
    createPath (albumPath) {
      return 'http://192.168.88.204:3030' + albumPath
    }
  }
}
</script>
<style lang="sass" scoped>
#album
  width: 70%
  height: 100%
  animation: fadein 2s
  margin: 20px auto
  background: rgba(255, 255, 255, 0.8)
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
  padding: 20px 50px
  border-radius: 5px
</style>
