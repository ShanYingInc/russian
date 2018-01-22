<template>
<div id="network">
  <div class="top">
  <div class="switch">
    <div class="link"><router-link to='/Network/Sister'>姐妹校</router-link></div>
    <div class="link"><router-link to='/Network/Friendlylinks'>國內友站連結</router-link></div>
    <div class="link"><router-link to='/Network/Learning'>學習資源網</router-link></div>
    <div class="link"><router-link to='/Network/Networkemployment'>就業服務</router-link></div>
  </div>
  </div>
  <div class="bottom">
    <slider></slider>
    <router-view class="test-content"></router-view>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Slider from '../Slider'

export default {
  components: {
    Slider
  }
}
</script>

<style lang="sass">
#network
  padding: 20px 0 0 0
  display: flex
  flex-direction: column
  .top
    .switch
      display: flex
      flex-direction: row
      justify-content: center
      margin: 30px 0
      .link
        display: inline-block
        a
          box-shadow: 1px 2px 4px rgba(0, 0, 0, .5)
          text-decoration: none
          color: #333
          padding: 10px 20px
          background: #ccc
          transition: color 0.1s, background-color 0.1s
          letter-spacing: 1px
          font-weight: 900
          position: relative
          &:hover, &:focus, &:active
            background: #eee
            // color: #999
          &::before
            content: ''
            display: block
            position: absolute
            bottom: 0px
            left: 0
            height: 3px
            width: 100%
            background-color: #000
            transform-origin: right top
            transform: scale(0, 1)
            transition: color 0.1s,transform 0.2s ease-out
          &:active::before
            background-color: #000
          &:hover::before, &:focus::before
            transform-origin: left top
            transform: scale(1, 1)
  .bottom
    display: flex
    flex-direction: row
  .network-content
    margin-top: 50px
</style>