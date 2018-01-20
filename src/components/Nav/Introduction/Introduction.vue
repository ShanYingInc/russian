<template>
<div id="introduction">
  <div class="switch">
    <div class="link"><router-link to='/Introduction/Important'>重要記事</router-link></div>
    <div class="link"><router-link to='/Introduction/Vision'>願景及策略</router-link></div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      intro: 'introduction'
    })
  }
}
</script>

<style lang="sass">
#introduction
  display: flex
  flex-direction: column
  margin: 10px
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
  .introduction-content
    width: 70%
    border: 1px solid #ccc
    border-radius: 5px
    padding: 20px 20px
    margin: 0 auto
</style>