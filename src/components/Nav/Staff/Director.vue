<template>
<div id="fulltime">
  <div class="location-contain">
    <div class="locations" v-for="(location, index) in locations" :key="index">
      <div class="place">
        <div class="pic">
          <img :src="location.img" height="150"/>
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
export default {
  data () {
    return {
      locations: [
        {
          name: '蘇淑燕',
          img: 'http://www.tfux.tku.edu.tw/img.php?img=274_e624995b.jpg&dir=archive',
          title: '現任淡江大學俄國語文學系專任副教授',
          field: '任期：2013.08.01~2017.07.31',
        },
        {
          name: '張慶國',
          img: '',
          title: '現任淡江大學俄國語文學系專任副教授',
          field: '任期：2007.08.01~2013.07.31',
        },
        {
          name: '馬良文',
          img: '',
          title: '退休',
          field: '任期：2003.08.01~2007.07.31',
        },
        {
          name: '彼薩列夫',
          img: '',
          title: '現任淡江大學俄國語文學系兼任教授',
          field: '任期：1997.08.01~2003.07.31',
        },
        {
          name: '劉克甫',
          img: '',
          title: '退休',
          field: '任期：1996.08.01~1997.07.31',
        },
        {
          name: '楊棨',
          img: '',
          title: '退休',
          field: '任期：1994.08.01~1996.07.31',
        },
        {
          name: '戴萬欽',
          img: '',
          title: '創系主任 現任淡江大學國際事務副校長兼國際研究學院院長',
          field: '任期：1993.08.01~1994.07.31',
        }
      ]
    }
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
