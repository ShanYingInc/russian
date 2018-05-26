<template lang="pug">
#app
  .background
  HeaderComponent
  transition(name="fade", mode="in-out")
    .content
      router-view
  FooterComponent
</template>

<script>
import { api } from './api'
import { mapActions } from 'vuex'
import FooterComponent from "./components/Footer"
import HeaderComponent from "./components/Header"

export default {
  name: 'App',
  components:{
    FooterComponent,
    HeaderComponent
  },
  methods: {
    ...mapActions(['initData'])
  },
  created () {
    this.initData()
  }
}
</script>

<style lang="sass" scoped>
#app
  display: flex
  min-height: 100vh
  flex-direction: column
  position: relative
  .background
    width: 100%
    height: 100%
    flex: none
    position: fixed
    left: 0
    top: 0
    z-index: 0
    background: url(assets/background.png) center no-repeat
    background-size: cover
    filter: opacity(10%)
  .content
    flex-grow: 999
    z-index: 20
    @include breakpoint(pc)
      margin: 0px auto 20px
    @include breakpoint(mobile)
      margin: 0px auto
</style>
