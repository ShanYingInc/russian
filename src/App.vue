<template>
    <div id="app">
      <HeaderComponent />
      <router-view/>
      <router-view name = "up"></router-view>
      <router-view name = "down"></router-view>
      <router-view name = "left" ></router-view>
      <router-view name = "right"></router-view>
      <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer"
import HeaderComponent from "@/components/Header"

export default {
  components:{
    Footer,
    HeaderComponent
  }
}
</script>

<style>
body {
  margin: 0
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
