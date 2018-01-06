<template>
    <div id="app">
      <HeaderComponent />
      <router-view/>
      <router-view name = "up"></router-view>
      <router-view name = "down"></router-view>
      <div id="middle">
        <router-view name = "left"></router-view>
        <router-view name = "right"></router-view>
      </div>
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

#middle {
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
</style>
