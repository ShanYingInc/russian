<template lang="pug">
#footer
  .left
    ul
      h4 淡江大學俄國語文學系
      li
        p 25137 新北市淡水區英專路151號 淡江大學外語大樓FL209室
      li
        p TEL：(02)26215656轉2711  FAX：(02)26209907
      li
        p Email：tfux@www2.tku.edu.tw
      li
        p Copyright©2018 版權為淡江大學俄文系所有
  .middle
  //- a.middle(href="https://www.facebook.com/tkurussian/")
  //-   i.fab.fa-facebook-square
  a.right(href="https://www.facebook.com/tkurussian/")
    i.fab.fa-facebook-square

</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="sass" scoped>
@font-face
	font-family: 'Noto Sans TC', sans-serif
	src: url("../../assets/DFXingKaiStd-W5.otf") format("opentype")

#footer
  padding: 10px 0 0 0
  width: 100%
  font-family: 'Noto Sans TC', sans-serif
  background-color: rgb(0, 87, 146)
  display: flex
  justify-content: space-between
  order: 99
  z-index: 999
  @include breakpoint(pc)
    flex-direction: row
  @include breakpoint(mobile)
    flex-direction: column
  .left
    text-align: left
    h4
      font-family: 'Noto Sans TC', sans-serif
      color: white
      margin: 10px 0
      @include breakpoint(pc)
        font-size: 2em
      @include breakpoint(mobile)
        font-size: 1.5em
    p
      margin: 5px 0
      font-family: 'Noto Sans TC', sans-serif
      font-size: 16px
      color: #ffffff
      @include breakpoint(pc)
        font-size: 1em
      @include breakpoint(mobile)
        font-size: 0.8em
  .middle
    padding: 10px
    align-self: center
    position: absolute
    left: 50%
    transform: translate(-50%, 0)
    i
      font-size: 6em
      color: white
  .right
    align-self: center
    @include breakpoint(pc)
      padding: 0 30px 0 0
      i
        font-size: 9em
        color: white
    @include breakpoint(mobile)
      padding: 0px 0 10px 0px
      i
        font-size: 4em
        color: white
</style>
