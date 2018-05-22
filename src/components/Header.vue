<template lang="pug">
#header
  .header
    router-link.logo(to='/')
      img(src='../assets/logo.png' ,height=80)
    .goindex
      ul
        li
          router-link.btn.btn-link.btn-sm(
            to='/',
            tabindex='-1',
            role='button'
          ) 回首頁
        li
          router-link.btn.btn-link.btn-sm(
            to='http://www.tku.edu.tw/',
            tabindex='-1',
            role='button'
          ) 淡江大學
        li
          span.btn.btn-link.btn-sm(@click="switchLanguage(`tw`)") 中文版
        li
          span.btn.btn-link.btn-sm(@click="switchLanguage(`en`)") English
        li
          span.btn.btn-link.btn-sm(@click="switchLanguage(`ru`)") Русский
  NavBar
</template>
<script>
import NavBar from './Navbar'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapState({
      navigations: 'navigation'
    }),
    ...mapGetters(['teachingExcellenceYears'])
  },
  methods: {
    ...mapActions({
      switchLanguage: 'switchLanguage'
    })
  }
}
</script>
<style lang="sass" scoped>
#header
  height: 100%
  display: flex
  flex-direction: column
  background: white
  .goindex
    position: absolute
    right: 10px
    top: 0px
    padding: 10px 0 0 0
    ul li
      display: inline
    ul li a ,span
      font-size: 15px
      font-family: "Microsoft YaHei"
      color: #005792
      font-weight: 600
    li:not(:last-child):after
      content: '|'
      color: #005792
  .header
    padding: 40px 20px 20px 20px
</style>
