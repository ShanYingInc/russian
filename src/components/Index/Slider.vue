<template>
<div id="slider">
  <el-menu default-active="1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router=true>
    <el-menu-item-group>
      <el-menu-item index="/News/Student/Departmenttolearn">學生資訊</el-menu-item>
      <el-menu-item index="/News/Events/Eventsintroduction">學術活動</el-menu-item>
      <el-menu-item index="/News/StudentInformation">活動花絮</el-menu-item>
      <el-menu-item index="6">戲劇公演</el-menu-item>
      <el-menu-item index="/News/Network/Sister">網路資源</el-menu-item>
      <el-menu-item index="/News/Downloads/Downloadsstudent">下載專區</el-menu-item>
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
