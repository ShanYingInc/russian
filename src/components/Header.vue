<template lang="pug">
#header
  .header
    router-link.logo(to='/')
      img(src='../assets/logo.png' ,height = '80' )
    .goindex
      ul
        li.test(span='')
          router-link(to='/') 回首頁 |
        li
          a(href='')  淡江大學 |
        li
          router-link(to='/')  中文版 |
        li
          router-link(to='/')  English |
        li
          router-link(to='/')  Русский
  .nav
    b-nav
      b-nav-item(to="/newsList") 最新消息
      b-nav-item-dropdown#nav-2(text='系所簡介')
        b-dropdown-item(to="/Introduction/Important") 重要記事
        b-dropdown-item(to="/Introduction/Vision") 願景及策略
      b-nav-item-dropdown#nav-3(text='師資陣容')
        b-dropdown-item(to="/Staff/Fulltime") 專任師資
        b-dropdown-item(to="/Staff/Parttime") 兼任師資
        b-dropdown-item(to="/Staff/Director") 歷屆系主任
        b-dropdown-item(to="/Staff/Administrative") 行政人員
        b-dropdown-item(to="/Staff/Tutor") 各班導師
        b-dropdown-item(to="/Enrollment/Answer") 招生訊息
      //- b-nav-item-dropdown#nav-4(text='學期課表')
      //-   b-dropdown-item(to="/Class/Courseinformation") 課程資訊
      //-   b-dropdown-item(to="/Class/Course") 課程架構
      //-   b-dropdown-item(to="/Class/Alternative") 必選修科目
      //-   b-dropdown-item(to="/Class/Required") 替代科目
      //-   b-dropdown-item(to="/Class/Relevant") 相關修業規定
      //-   b-dropdown-item(to="/Class/Credit") 學分學程
      //-   b-dropdown-item(to="/Class/Auxiliary") 輔系雙學位
      //- b-nav-item-dropdown#nav-5(text='招生資訊')
      //-   b-dropdown-item(to="/Enrollment/Admission") 申請入學
      //-   b-dropdown-item(to="/Enrollment/Answer") 相關問題和解答
      //-   b-dropdown-item(to="/Winning") 獲獎紀錄
      //- b-nav-item-dropdown#nav-6(text='教卓計畫')
      //-   b-dropdown-item(to="/Teaching/Teaching100") 100學年度
      //-   b-dropdown-item(to="/Teaching/Teaching101") 101學年度
      //-   b-dropdown-item(to="/Teaching/Teaching102") 102學年度
      //- b-nav-item(to="/Friends/Friendsintroduction") 系友專區
      b-nav-item-dropdown(v-for="(nav, index) in navigations", :key="index", :text='nav.name', :id="`nav_` + nav.navigation_id")
        b-dropdown-item(v-for="(subNav, subIndex) in nav.subItems", :key="subIndex", :to="`/content?parent=`+nav.name+`&contentKey=`+subNav.content_key") {{ subNav.name }}
      b-nav-item(to="/eventHighlignt") 活動花絮

</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      navigations: 'navigation'
    })
  }
  // methods: {
  //   ...mapMutations({
  //     staffType: 'UPDATE_STAFF_TYPE'
  //   })
  // }
}
</script>
<style lang="sass" scoped>
#header
  height: 100%
  display: flex
  flex-direction: column
  background: white
  .goindex
    padding: 10px 0 0 0
  .header
    padding: 10px
  .nav
    font-family: "Microsoft YaHei"
    width: 100vw
    height: 100%
    background: #666
    .dropdown-menu > li > a
      color: white
    .dropdown-item.active
      background: white
    ul
      li
        a
          color: white
        div
          a
            color: black

.goindex ul li
  display: inline;

.goindex
  position: absolute
  right: 22vh
  top: -1vh

.goindex ul li a
  font-size: 15px
  font-family: "Microsoft YaHei"
  color: #4169E1;
</style>
