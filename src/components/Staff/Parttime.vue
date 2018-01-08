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
          name: '彼薩列夫',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.24_37ef0dce.jpg.w95_h117.jpg',
          title: '教授',
          field: '新聞俄語、觀光俄語口譯、俄...',
          email: 'ralex@mail.tku.edu.tw',
          tax: '(02)2621-5656轉2798'
        },
        {
          name: '陳兆麟',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/32_10106d49.jpg',
          title: '教授',
          field: '俄語語音學',
        },
        {
          name: '薩承科',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.57_a55f1b24.jpg.w95_h117.jpg',
          title: '副教授',
          field: '俄語習作(一)',
        },
        {
          name: '陳巧雯',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.41_d553a84e.jpg.w95_h114.jpg',
          title: '助理教授',
          field: '商用俄語(一)',
        },
        {
          name: '龔信賢',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.46_173150ec.jpg.w92_h120.jpg',
          title: '助理教授',
          field: '俄國文學經典入門(文學經典...',
        },
        {
          name: '律可娃柳博芙',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.13_52e90ba0.jpg.w95_h117.jpg',
          title: '講師',
          field: ' 俄語實習（一）',
        },
        {
          name: '愛羅莎',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.56_962845fa.jpg.w95_h117.jpg',
          title: '講師',
          field: '俄文(一)、俄文(二)',
        },
        {
          name: '楊立偉',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.10_da71a19b.jpg.w95_h117.jpg',
          title: '講師',
          field: '俄國史',
        },
                {
          name: '郭昕宜',
          img: 'http://www.tfux.tku.edu.tw/files/users/pic/cache.55_254ff04e.jpg.w95_h117.jpg',
          title: '講師',
          field: '俄語華語教學',
        },
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
