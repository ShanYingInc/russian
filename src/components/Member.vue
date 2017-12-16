<template>
        <div class="location-contain">
            <div class="locations" v-for="location in locations" :key="location">
            <place :img="location.img" :desc="location.desc">
                <h2>{{ location.name }}</h2>
            </place>
            </div>
        </div>
</template>

<script>
import Place from '@/components/Place'

export default {
  components: {
    Place
  },
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

<style>
body {
  width: 100vw;
  height: 100vh;
  font-family: 'Microsoft YaHei';
}

h1 {
  text-align: center;
}

.location-contain {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  position: relative;
  top:10vh;

}

.place {    
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 280px;
  height: 320px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;
}

.place h2 {
  margin: 0;
  text-align: center;
}

.place img {
  margin: 10px;
  -ms-flex-item-align: center;
      align-self: center;
}

</style>