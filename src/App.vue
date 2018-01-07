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
import { api } from './api'
import Footer from "@/components/Footer"
import HeaderComponent from "@/components/Header"

export default {
  components:{
    Footer,
    HeaderComponent
  },
  mounted () {
    const request = api.getAllStaff() // 回傳 Request() 物件
    fetch(request).then(response => {
      // fetch() 本身就是個 Promise() 物件
      // 呼叫成功後會回傳一個 Response() 物件
      // 但這個 Response() 需呼叫 json() 或 text() 等 methods
      // 才能將 response 中的資料抓出來

      response.json().then(data => {
        // 因為 json() 和 text() 等 methods 都是 Promise() 物件
        // 所以都要使用 then()
        console.log(data)

        // 要注意的是這裡的 `this` 跟 Vue實例的 `this` 不一樣
        // 而且這是異步方法，所以我會建議使用Vuex
        // 在這裡呼叫 commit() 將 data 傳入 state 中
      })
    })
  }
}
</script>

<style>

body {
  width: 100vw;
  height: 100vh;
  font-family: 'Microsoft YaHei';
  margin: 0;
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
