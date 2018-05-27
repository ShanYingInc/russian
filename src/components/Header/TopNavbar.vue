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
import { mapActions } from 'vuex'

export default {
  name: 'TopNavbar',
  methods: {
    ...mapActions(['switchLanguage'])
  }
}
</script>
<style lang="sass" scoped>
#top-navbar
  margin: 0
  display: flex
  .item
    a ,button
      font-family: 'Noto Sans TC', sans-serif
      color: #005792
      @include breakpoint(pc)
        font-weight: 600
        font-size: 1em
      @include breakpoint(mobile)
        font-size: 1em
        font-weight: 500
  @include breakpoint(pc)
    padding: 10px
    justify-content: flex-start
    .item:not(:last-child):after
      content: '|'
      color: #005792
  @include breakpoint(mobile)
    padding: 0px
    justify-content: flex-start
    overflow: scroll
</style>
