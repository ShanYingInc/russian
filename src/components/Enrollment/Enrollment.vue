<template lang="pug">
<div id="member">
  <div class="switch">
    <div class="link"><router-link to='/Enrollment/Admission'>申請入學</router-link></div>
    <div class="link"><router-link to='//Enrollment/Answer'>相關問題和解答</router-link></div>
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
  width: 100vw
  height: 100%
  text-align:left
  animation: fadein 2s
  .content
    margin: 20px
    padding: 20px 50px
    border: 1px solid #ccc
    border-radius: 5px
@keyframes fadein
  from
    opacity: 0
  to
    opacity: 1

#member
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
  .location-contain
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    .locations
      height: 100%
      .place
        display: flex
        flex-direction: column
        width: 250px
        height: 100%
        background: white
        border: 1px solid #ddd
        padding: 20px 20px
        .pic
          align-self: center
        .text



</style>