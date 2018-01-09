<template lang="pug">
#app
  HeaderComponent
  router-view.app-content
  Footer
</template>

<script>
import { api } from './api'
import {mapActions} from 'vuex'
import Footer from "@/components/Footer"
import HeaderComponent from "@/components/Header"

export default {
  components:{
    Footer,
    HeaderComponent
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    })
  },
  mounted () {
    this.initData()
  }
}
</script>

<style lang="sass">

body
  max-width: 100vw
  min-height: 100vh
  font-family: 'Microsoft YaHei'
  margin: 0


#app
  display: flex
  min-height: 100vh
  flex-direction: column
  position: relative
  padding-bottom: 212px
  background: url(assets//background.jpg) center no-repeat
  background-size: cover
  .app-content
    flex-grow: 999

</style>
