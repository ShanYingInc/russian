<template>
  <el-container>
    <div id="app">
      <Header />
      <router-view/>
      <router-view name = "up"></router-view>
      <router-view name = "down"></router-view>
      <router-view name = "left" ></router-view>
      <router-view name = "right"></router-view>
      <Footer />
    </div>
  </el-container>
</template>

<script>
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Card from "@/components/Card"

export default {
  components:{
    Footer,
    Header,
    Carousel,
    Card
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
