<template>
<div id="studentinformation">
  <div class="switch">
    <div class="link"><router-link to='/Student/Departmenttolearn'>系學會</router-link></div>
    <div class="link"><router-link to='/Student/Scholarship'>獎學金</router-link></div>
    <div class="link"><router-link to='/Student/Sophomore'>大三出國甄選</router-link></div>
    <div class="link"><router-link to='/Student/Sar'>俄語特區</router-link></div>
    <div class="link"><router-link to='/Student/Professional'>專業證照</router-link></div>
    <div class="link"><router-link to='/Student/Statisticsemployment'>統計就業服務</router-link></div>
  </div>
  <router-view class="test-content"></router-view>
</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  
}
</script>
<style lang="sass">
#studentinformation
  display: flex
  flex-direction: column
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
  .studentinformation-content
    margin-top: 50px
</style>