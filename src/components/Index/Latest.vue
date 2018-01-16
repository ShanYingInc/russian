<template lang="pug">
#latest
  .title 最新消息
  .list
    .news(v-for="i in 6")
      .date 2018-01-15
      .type 行政事項
      .content 考試求公平及公正，請詳閱並遵守考場規則。
</template>
<script>
export default {

}
</script>
<style lang="sass">
#latest
  width: 70%
  margin: 20px auto
  background: rgba(255, 255, 255, 0.4)
  padding: 1%
  border-radius: 5px
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .5)
  .list
    display: flex
    flex-wrap: wrap
    .news
      flex: 0 47%
      background: white
      padding: 10px
      margin: 10px
      display: flex
      flex-direction: column
      .date, .type, .content
        margin: 10px
</style>
