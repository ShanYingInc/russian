<template lang="pug">
#header
  TopNavbar
  .header
    router-link.logo(to='/')
      img(src='../../assets/logo.png' ,height=80)
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
  .header
    padding: 0px 20px 20px 0px
</style>
