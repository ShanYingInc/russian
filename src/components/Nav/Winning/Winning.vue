<template>
<div id="Winning">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="分類"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="年度"
      width="50">
    </el-table-column>
    <el-table-column
      prop="address"
      label="獎項名稱"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="得獎人">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '教材出版與製作',
          name: '96',
          address: '學者的帝國(俄文版)',
          title:'馬良文'
        }, {
          date: '教材出版與製作',
          name: '95',
          address: '建國與農村',
          title:'彼薩列夫'
        }, {
          date: '教材出版與製作',
          name: '95',
          address: '十九世紀末俄國社會之女性問題',
          title:'劉皇杏'
        }, {
          date: '教材出版與製作',
          name: '95',
          address: '語言類型與節律體系',
          title:'張慶國'
        }, {
          date: '教材出版與製作',
          name: '95',
          address: '契訶夫論兩性關係之問題',
          title:'劉皇杏'
        }, {
          date: '教材出版與製作',
          name: '95',
          address: '基礎俄語語法',
          title:'蘇淑燕'
        }, {
          date: '教材出版與製作',
          name: '92',
          address: '中國的政治藝術',
          title:'馬良文'
        }, {
          date: '教材出版與製作',
          name: '91',
          address: '中國文明〈俄文〉',
          title:'馬良文'
        }, {
          date: '教材出版與製作',
          name: '90',
          address: 'Love unto death:Passion and reason in late Ming China',
          title:'馬良文'
        }, {
          date: '教材出版與製作',
          name: '86',
          address: 'Chiang kai-shek and the reorganisation of China’s countryside.',
          title:'彼薩列夫'
        },
        ]
      }
    }
  }
</script>
<style lang="sass">
#Winning
  margin: 20px auto
</style>
