<template lang="pug">
#app
  .background
  HeaderComponent
  router-view.app-content
  FooterComponent
</template>

<script>
import { api } from './api'
import {mapActions} from 'vuex'
import FooterComponent from "@/components/Footer"
import HeaderComponent from "@/components/Header"

export default {
  components:{
    FooterComponent,
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
  .background
    width: 100%
    height: 100%
    flex: none
    position: fixed
    left: 0
    top: 0
    z-index: 0
    background: url(assets/background.png) center no-repeat
    filter: opacity(50%)
    background-size: cover
  .app-content
    flex-grow: 999
  #header
    z-index: 999
  .app-content, #footer
    z-index: 99
</style>
