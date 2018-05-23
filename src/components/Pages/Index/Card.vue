<template lang="pug">
  a.card(:href="video.link")
    .inner(:style="generateCssBackground($api.rootLink + video.image.path.slice(1))")
      .title {{ video.title }}
      .content {{ video.content }}
</template>
<script>
export default {
  name: 'Card',
  props: {
    video: Object
  },
  methods: {
    generateCssBackground (url) {
      const background = `url(${url}) center`
      return { background }
    }
  }
}
</script>
<style lang="sass" scoped>
.card
  font-family: 'Noto Sans TC', sans-serif
  text-stroke: 1px black
  width: 228px
  height: 369px
  background: white
  text-decoration: none
  padding: 10px
  border-radius: 5px
  margin: 10px
  box-shadow: 0 0 10px rgba(0, 0, 0, .6)
  // transition: box-shadow 0.3s ease-in-out
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)
  .inner
    // -webkit-text-stroke: .5px black
    position: relative
    height: 100%
    width: 100%
    border-radius: 5px
    padding: 10px
    .title
      font-weight: 900
      line-height: 1.2em
      font-size: 1.5em
      text-align: left
      color: rgba(255, 255, 255, .9)
      letter-spacing: 3px
    .content
      font-weight: 400
      line-height: 1.2em
      font-size: 1em
      text-align: left
      color: rgba(255, 255, 255, .9)
      letter-spacing: 1px
    &::after
      // TODO: 圖片調暗 沒作用
      position: absolute
      background: rgba(0, 0, 0, .7)
  &:hover
    transform: scale(1.05, 1.05)
    box-shadow: 0 0 20px rgba(0, 0, 0, .6)
</style>
