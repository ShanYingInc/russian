<template>
  <div class="location-contain">
    <div class="locations" v-for="(location, index) in locations" :key="index">
      <div class="place">
        <div class="pic">
          <img :src="location.img" height="150"/>
        </div>
        <div class="text">
          <h2>{{ location.name }}</h2>
          <p>{{ location.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locations: [
        {
          name: 'moscow',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg',
          desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
        },
        {
          name: 'paris',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        },
        {
          name: 'rome',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
          desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`
        },
        {
          name: 'paris',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg',
          desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.location-contain
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  margin: 10px
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
