<template lang="pug">
#top-navbar
  .item
    router-link.btn.btn-link.btn-sm(
      to='/',
      tabindex='-1',
      role='button'
    ) 回首頁
  .item
    a.btn.btn-link.btn-sm(
      herf='http://www.tku.edu.tw/',
      tabindex='-1',
      role='button'
    ) 淡江大學
  .item
    button.btn.btn-link.btn-sm(@click="switchLanguage(`tw`)") 中文版
  .item
    button.btn.btn-link.btn-sm(@click="switchLanguage(`en`)") English
  .item
    button.btn.btn-link.btn-sm(@click="switchLanguage(`ru`)") Русский
</template>
<script>
export default {
  name: 'TopNavbar'
}
</script>
<style lang="sass" scoped>
#top-navbar
  padding: 10px
  margin: 0
  .item
    display: inline
    a ,button
      font-size: 15px
      font-family: "Microsoft YaHei"
      color: #005792
      font-weight: 600
  .item:not(:last-child):after
    content: '|'
    color: #005792
</style>
