<template>
<div id="fulltime">
  <div class="location-contain">
    <div class="locations" v-for="(location, index) in member" :key="index">
      <div class="place">
        <div class="pic">
          <!--<img :src="location.img" height="150"/>-->
        </div>
        <div class="text">
          <h2>{{ location.name }}</h2>
          <p>{{ location.title }}</p>
          <p>{{ location.field }}</p>
          <p>{{ location.email }}</p>
          <p>{{ location.tax }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      member: state => state.staff.filter(member => {
        return member.type === 'Tutor'
      })
    })
  }
}
</script>

<style lang="sass">
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
