<template>
  <el-container>
    <div id="app">
      <router-view/>
      <Header></Header>
      <Carousel></Carousel>
      <Card></Card>
      <Footer></Footer>
    </div>
  </el-container>
</template>

<script>
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Carousel from "../src/components/Carousel"
import Card from "../src/components/Card"

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
