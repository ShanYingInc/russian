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
