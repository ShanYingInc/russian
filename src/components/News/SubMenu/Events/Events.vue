<template>
<div id="events">
  <div class="top">
    <div class="switch">
      <div class="link"><router-link to='/Events/Eventsintroduction'>學術活動</router-link></div>
      <div class="link"><router-link to='/Events/Tea'>學術下午茶</router-link></div>
      <div class="link"><router-link to='/Events/Lecture'>專題演講</router-link></div>
      <div class="link"><router-link to='/Events/Read'>俄文系讀書會</router-link></div>
      <div class="link"><router-link to='/Events/Workshop'>教學工作坊</router-link></div>
    </div>
  </div>
  <div class="bottom">
    <slider></slider>
    <router-view class="test-content"></router-view>
  </div>
  
</div>
</template>
<script>
import Slider from '../Slider'
import {mapState} from 'vuex'

export default {
  components: {
    Slider
  }
}
</script>
<style lang="sass">
#events
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
  .test-content
    margin-top: 50px
</style>
