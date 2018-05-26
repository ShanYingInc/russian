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
      return {
        'background': `url(${url}) center no-repeat`,
        'background-size': 'cover'
      }
    }
  }
}
</script>
<style lang="sass" scoped>
$pc-width: 80vw
$pc-height: 300px

$mobile-width: 100%
$mobile-height: 200px

.card
  font-family: 'Noto Sans TC', sans-serif
  text-stroke: 1px black
  background: white
  text-decoration: none
  @include breakpoint(pc)
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)
    margin: 10px 0px
    width: $pc-width
    height: $pc-height
    box-shadow: 0 0 10px rgba(0, 0, 0, .6)
    border-radius: 5px
    padding: 10px
    &:hover
      transform: scale(1.05, 1.05)
      box-shadow: 0 0 20px rgba(0, 0, 0, .6)
  @include breakpoint(mobile)
    width: $mobile-width
    height: $mobile-height
    border-radius: 0px
    padding: 0px
  .inner
    position: relative
    height: 100%
    width: 100%
    padding: 10px
    @include breakpoint(pc)
      border-radius: 5px
    @include breakpoint(mobile)

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
</style>
