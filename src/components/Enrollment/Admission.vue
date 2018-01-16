<template lang='pug'>
#admission
  b-table(striped='', hover=true, :items='tableData', :fields='fields')
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '大學部 - 申請入學',
          name: '106學年度「大學個人申請入學」_第二階段指定項目甄試面試試場及序號查詢',
          address: '106_面試梯次分配表'
        }, {
          date: '大學部 - 申請入學',
          name: '106學年度大學「個人申請」入學_審查資料上傳作業相關說明',
          address: ''
        }, {
          date: '大學部 - 申請入學',
          name: '106學年度大學「個人申請」入學第二階段報考相關事項',
          address: ''
        }, {
          date: '大學部 - 相關問題和解答',
          name: '「個人申請」和「指考分發」多少分會上淡江文系？',
          address: ''
        }],
        fields: ['分類', '標題', '檔案下載']
      }
    }
  }
</script>
<style lang="sass">
#admission
  margin: 20px auto
</style>
