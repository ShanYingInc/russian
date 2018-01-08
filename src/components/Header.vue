<template lang="pug">
#header
  .header
    .logo
      img(src='http://www.tku.edu.tw/images/logo_x2.jpg')
    .goindex
      ul
        li.test(span='')
          router-link(to='/') 回首頁|
        li
          a(href='') 淡江大學|
        li
          a(href='') 網站地圖
  .nav
    el-menu(theme='line', :default-active='activeIndex', mode='horizontal', @select='handleSelect', background-color='#545c64', text-color='#fff', active-text-color='#ffd04b', router=true)
      el-menu-item(index='/News') 最新消息
      el-menu-item(index='/Introduction/Important') 本系介紹
      el-menu-item(index='/Staff/Fulltime') 本系成員
      el-menu-item(index='/Class/Classin') 學期課表 
      el-submenu(index = '5')
        template(slot='title') 招生資訊
        el-menu-item(index='5-1') 申請入學
        el-menu-item(index='5-2') 相關問題和解答
      el-submenu()
        template(slot='title') 學術成果
        el-menu-item(index='6-1') 期刊討論
        el-menu-item(index='6-2') 相關問題和解答
        el-menu-item(index='6-3') 專書
        el-menu-item(index='6-4') 專案計畫
        el-menu-item(index='6-5') 最新研究
      el-menu-item(index='/News') 獲獎紀錄
      el-submenu(index='8')
        template(slot='title') 實習計畫
        el-menu-item(index='8-1') 暑期海外實習
        el-menu-item(index='8-2') 企業實習
      el-submenu(index='9')
        template(slot='title') 教卓計畫
        el-menu-item(index='9-1') 100學年度
        el-menu-item(index='9-2') 101學年度
        el-menu-item(index='9-3') 102學年度
      //
        <el-menu-item index="9"><a href="https://www.ele.me" target="_blank">中文</a></el-menu-item>
        <el-menu-item index="10"><a href="https://www.ele.me" target="_blank">English</a></el-menu-item>
        <el-menu-item index="11"><a href="https://www.ele.me" target="_blank">Русский</a></el-menu-item>

</template>
<script>
export default {};
</script>
<style scoped>
#header {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 10px
}

img {
  width: 700px;
  height: 100%;
}

ul li {
  display: inline;
}

.goindex {
  position: absolute;
  right: 22vh;
  top: -1vh;
}
.goindex ul li a {
  font-size: 15px;
  font-family: "Microsoft YaHei";
  color: #000000;
}

.nav {
  font-family: "Microsoft YaHei";
  width: 100vw;
  height: 100%
}

.el-submenu__title {
  font-family: "Microsoft YaHei";
}

</style>
