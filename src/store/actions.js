import { types } from './mutations_types'
import Api from '../api'

const api = new Api()

export const actions = {
  async initData ({ commit, state, dispatch }) {

    api.member.get().then(async response => {
      commit(types.UPDATE_STAFF_DATA, await response.data.data)
    })

    api.news.get().then(async response => {
      commit(types.UPDATE_NEWS_DATA, await response.data.data)
    })

    api.video.get().then(async response => {
      commit(types.UPDATE_VIDEO_DATA, await response.data.data)
    })

    api.navigation.get().then(async response => {
      commit(types.UPDATE_NAVIGATION_DATA, await response.data.data)
    })

    api.content.get().then(async response => {
      commit(types.UPDATE_CONTENT_DATA, await response.data)
    })

    api.album.get().then(async response => {
      commit(types.UPDATE_ALBUM_DATA, await response.data.data)
    })

    api.banner.get().then(async response => {
      commit(types.UPDATE_BANNER_DATA, await response.data)
    })
  },
  async switchLanguage ({ commit, state, dispatch }, language) {
    api.switchLanguage(await language)
    await dispatch('initData')
  },
  async ApiRootLink ({ commit, state, dispatch }) {
    return await this.api.rootLink
  }
}
