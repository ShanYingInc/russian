<template lang="pug">
#slider
  b-nav(vertical=true, justified=true)
    b-nav-item(to="/News/Student/Departmenttolearn") 學生資訊
    b-nav-item(to="/News/Events/Eventsintroduction") 學術活動
    b-nav-item(to="/StudentInformation") 活動花絮
    b-nav-item() 戲劇公演
    b-nav-item(to="/News/Network/Sister") 網路資源
    b-nav-item(to="/News/Downloads/Downloadsstudent") 下載專區

</template>

<script>
export default {

}
</script>

<style lang="sass">
#slider
  width: 148px
  height: 100%
  background: #666
  align-self: center
  ul
    li
      a
        color: white
        padding: 10px
        font-size: 1.2em
        &:hover
          color: #ccc

</style>
