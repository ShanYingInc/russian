<template lang="pug">
#header
  TopNavbar
  .header
    router-link.logo(to='/')
      img(src='../assets/logo.png' ,height=80)
  NavBar
</template>
<script>
import NavBar from './Navbar'
import TopNavbar from './TopNavbar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    NavBar,
    TopNavbar
  },
  computed: {
    ...mapState({
      navigations: 'navigation'
    }),
    ...mapGetters(['teachingExcellenceYears'])
  },
  methods: {
    ...mapActions({
      switchLanguage: 'switchLanguage'
    })
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
