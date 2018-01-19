<template lang='pug'>
#friends
  .switch
    .link
      router-link(to='/Friends/Friendsintroduction') 系友會簡介
    .link
      router-link(to='/Friends/Activities') 系友會活動
    .link
      router-link(to='/Friends/Latestnews') 最新動態
    .link
      router-link(to='/Friends/Highlights') 活動集錦
    .link
      router-link(to='/Friends/World') 俄語天地
    .link
      router-link(to='/Friends/Celebrity') 系友名人榜
    .link
      a(href='') Face Book / Blog
  router-view.test-content
</template>
<script>
import {mapState} from 'vuex'

export default {

}
</script>
<style lang="sass">
#friends
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
  .test-content
    margin-top: 20px
</style>
