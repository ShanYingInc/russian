<template>
  <el-menu default-active="1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" id="slider">
    <el-menu-item-group>
      <el-menu-item index="1">大三出國留學</el-menu-item>
      <el-menu-item index="2"><router-link to="/Introduction/StudentInformation">學生資訊</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/Introduction/GraduatesInformation">系友專區</router-link></el-menu-item>
      <el-menu-item index="4">學術活動</el-menu-item>
      <el-menu-item index="5">活動花絮</el-menu-item>
      <el-menu-item index="6">戲劇公演</el-menu-item>
      <el-menu-item index="7">網路資源</el-menu-item>
      <el-menu-item index="8">行事曆</el-menu-item>
      <el-menu-item index="9">留言板</el-menu-item>
      <el-menu-item index="10">俄檢專區</el-menu-item>
      <el-menu-item index="11">下載專區</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>
export default {

}
</script>

<style>
#slider{
  width: 148px;
  height: 100%;
}
</style>
