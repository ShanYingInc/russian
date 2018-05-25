<template lang="pug">
#header
  TopNavbar
  router-link(to='/')
    img.logo
  NavBar
</template>
<script>
import NavBar from './Navbar'
import TopNavbar from './TopNavbar'

export default {
  name: 'HeaderComponent',
  components: {
    NavBar,
    TopNavbar
  }
}
</script>
<style lang="sass" scoped>
#header
  height: 100%
  display: flex
  flex-direction: column
  background: white
  a
    padding: 0 20px 10px 10px
    img.logo
      width: calc(100vw - 20px)
      height: auto
      @include breakpoint(pc)
        content: url("../../assets/logo_new.png")
      @include breakpoint(mobile)
        content: url("../../assets/logo_mobile.png")
</style>
