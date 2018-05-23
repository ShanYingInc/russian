<template lang="pug">
#top-navbar
  ul
    li
      router-link.btn.btn-link.btn-sm(
        to='/',
        tabindex='-1',
        role='button'
      ) 回首頁
    li
      a.btn.btn-link.btn-sm(
        herf='http://www.tku.edu.tw/',
        tabindex='-1',
        role='button'
      ) 淡江大學
    li
      span.btn.btn-link.btn-sm(@click="switchLanguage(`tw`)") 中文版
    li
      span.btn.btn-link.btn-sm(@click="switchLanguage(`en`)") English
    li
      span.btn.btn-link.btn-sm(@click="switchLanguage(`ru`)") Русский
</template>
<script>
export default {
  name: 'TopNavbar'
}
</script>
<style lang="sass" scoped>
#top-navbar
  ul
    padding: 10px
    margin: 0
    li
      display: inline
    a ,span
      font-size: 15px
      font-family: "Microsoft YaHei"
      color: #005792
      font-weight: 600
    li:not(:last-child):after
      content: '|'
      color: #005792
</style>
