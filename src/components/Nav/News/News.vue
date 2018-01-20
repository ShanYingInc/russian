<template lang="pug">
#news
  .event(v-for="i in 10")
    h3.title 標題
    p.date 2018-01-10
    p.content 臺灣第一所私立高等學府，是國內創校歷史最悠久的私立大學。Cheers雜誌「全國一千大企業人才策略與最愛的大學畢業生」調查，連續19年蟬聯私立大學第1名；是全球第一所通過WHO國際安全學校認證，同時擁有ISO 14001環安、ISO 27001資安、ISO 20000資訊服務管理等國際認證，並榮獲第19屆國家品質獎的大學
</template>
<script>

export default {

}
</script>
<style lang="sass">
#news
  display: flex
  flex-direction: column
  .event
    background: rgba(255,255,255,0.9)
    padding: 20px
    margin: 20px
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4)
    h3
      text-align: left
</style>
