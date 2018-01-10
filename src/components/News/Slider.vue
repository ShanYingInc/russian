<template>
<div id="slider">
  <el-menu default-active="1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item-group>
      <el-menu-item index="1"><a href="http://www.junioryear.tku.edu.tw/main.php">大三出國留學</a></el-menu-item>
      <el-menu-item index="2"><router-link to="/News/Student/Departmenttolearn">學生資訊</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/News/Friends/Friendsintroduction">系友專區</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/News/GraduatesInformation">學術活動</router-link></el-menu-item>
      <el-menu-item index="5">活動花絮</el-menu-item>
      <el-menu-item index="6">戲劇公演</el-menu-item>
      <el-menu-item index="7">網路資源</el-menu-item>
      <el-menu-item index="8"><router-link to="/News/Test/Testnews">俄檢專區</router-link></el-menu-item>
      <el-menu-item index="9">下載專區</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
#slider {
  /* width: 148px; */
  height: 100%
}
a:link {
    color: white;
    text-decoration: none;
}

/* visited link */
a:visited {
    color: white;
    text-decoration: none;
}

/* mouse over link */
a:hover {
    color: white;
    text-decoration: none;
}

/* selected link */
a:active {
    color: orangered;
    text-decoration: none;
}
</style>
