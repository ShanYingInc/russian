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
          name: '劉皇杏',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.25_7dc7fdc7.jpg.w95_h117.jpg',
          title: '副教授兼系主任',
          field: '大一俄語、俄國文學史',
          email: '119342@mail.tku.edu.tw',
          tax: '(02)2621-5656轉3020'
        },
        {
          name: '張慶國',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.20_6f455596.jpg.w95_h117.jpg',
          title: '副教授',
          field: '俄語會話（一）、俄語視聽練...',
          email: '114804@mail.tku.edu.tw',
          tax: '(02)2621-5656轉2116'
        },
        {
          name: '蘇淑燕',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.19_1b301054.jpg.w95_h117.jpg',
          title: '副教授',
          field: '俄羅斯概論、俄語語法(二)...',
          email: '112556@mail.tku.edu.tw',
          tax: '(02)2621-5656轉2792、2964'
        },
        {
          name: '龔雅雪',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.12_e02df353.jpg.w95_h117.jpg',
          title: '副教授',
          field: '俄語會話(二)、俄語短篇名...',
          email: '122500@mail.tku.edu.tw',
          tax: '(02)2621-5656轉3080'
        },
        {
          name: '史薇塔',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.17_14c928f1.jpg.w90_h120.jpg',
          title: '助理教授',
          field: '俄語會話(一)、語會話（二...',
          email: '136046@mail.tku.edu.tw',
          tax: '(02)2621-5656轉2495'
        },
        {
          name: '那達怡',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.15_4b8b1291.jpg.w95_h117.jpg',
          title: '助理教授',
          field: '大三俄語、俄語會話(三)、...',
          email: '133212@mail.tku.edu.tw',
          tax: '(02)2621-5656轉3081'
        },
        {
          name: '郭昕宜',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.11_d4816f59.jpg.w95_h117.jpg',
          title: '助理教授',
          field: '大二俄語、俄羅斯文化概論',
          email: '126230@mail.tku.edu.tw',
          tax: '(02)2621-5656轉2324'
        },
        {
          name: '鄭盈盈',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.16_f64d08fe.jpg.w95_h117.jpg',
          title: '助理教授',
          field: '俄語語法(一)、商用俄語(...',
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
