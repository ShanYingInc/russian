<template lang="pug">
#footer
  .left
    ul
      h4 {{ $t('footer.departmentName') }}
      li
        p {{ $t('footer.location') }}
      li
        p {{ $t('footer.phone') }}
      li
        p {{ $t('footer.email') }}
      li
        p {{ $t('footer.copyright') }}
  .middle
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
    ul::marker
      color: white
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
