<template lang="pug">
#footer
  .left
    ul
      h4 淡江大學俄國語文學系
      li
        p 25137 新北市淡水區英專路151號 淡江大學外語大樓FL209室
      li
        p TEL：(02)26215656轉2711  FAX：(02)26209907
      li
        p Email：tfux@www2.tku.edu.tw
      li
        p Copyright©2018 版權為淡江大學俄文系所有
  .right
    i.fab.fa-facebook-square

</template>

<script>
export default {};
</script>

<style lang="sass">
@font-face 
	font-family: "DFXing"
	src: url("../assets/DFXingKaiStd-W5.otf") format("opentype")

#footer
  padding: 10px 0 0 0
  width: 100vw
  font-family: "Microsoft YaHei";
  background-color: #34495e;
  display: flex
  flex-direction: row
  justify-content: space-between
  position: absolute
  bottom: 0
  .left
    text-align: left
    h4
      font-family: "DFXing";
      color: white
    p
      margin: 0
      font-family: "DFXing";
      font-size: 16px;
      color: #ffffff;
  .right
    padding: 10px
    align-self: flex-end
    i
      font-size: 6em
      color: white
</style>
