import { types } from './mutations_types'
import { api } from '../api'

export const actions = {
  initData ({ commit, state, dispatch }) {
    // const request = api.getAllStaff() // 回傳 Request() 物件
    // fetch(request).then(response => {
      // fetch() 本身就是個 Promise() 物件
      // // 呼叫成功後會回傳一個 Response() 物件
      // // 但這個 Response() 需呼叫 json() 或 text() 等 methods
      // // 才能將 response 中的資料抓出來

      // response.json().then(data => {
        // // 因為 json() 和 text() 等 methods 都是 Promise() 物件
        // // 所以都要使用 then()
        // console.log(data)

        // // 要注意的是這裡的 `this` 跟 Vue實例的 `this` 不一樣
        // // 而且這是異步方法，所以我會建議使用Vuex
        // // 在這裡呼叫 commit() 將 data 傳入 state 中
      // })
    // })

    // fetch(api.getallintroduction()).then(response => {
    //   response.json().then(data => {
    //     console.log(data)
    //      commit(types.UPDATE_INTRODUCTION_DATA, data)
    //   })
    // })

    api.member.get().then(response => {
      commit(types.UPDATE_STAFF_DATA, response.data)
    })

    api.news.get().then(response => {
      commit(types.UPDATE_NEWS_DATA, response)
    })

    api.video.get().then(response => {
      commit(types.UPDATE_VIDEO_DATA, response.data)
    })

    api.navigation.get().then(response => {
      // console.log(response.data)
      commit(types.UPDATE_NAVIGATION_DATA, response.data)
    })

    api.content.get().then(data => {
      commit(types.UPDATE_CONTENT_DATA, data)
    })

    api.album.get().then(data => {
      commit(types.UPDATE_ALBUM_DATA, data.data)
    })
  }
}
