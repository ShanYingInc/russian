import { types } from './mutations_types'
import Api from '../api'

const api = new Api()

export const actions = {
  async updateMemberData ({ commit }) {
    const response = await api.member.get()
    commit(types.UPDATE_STAFF_DATA, await response.data.data)
  },
  async updateNewsData ({ commit }) {
    const response = await api.news.get()
    commit(types.UPDATE_NEWS_DATA, await response.data.data.reverse())
  },
  async updateVideoData ({ commit }) {
    const response = await api.video.get()
    commit(types.UPDATE_VIDEO_DATA, await response.data.data)
  },
  async updateNavigationData ({ commit }) {
    const response = await api.navigation.get()
    commit(types.UPDATE_NAVIGATION_DATA, await response.data.data)
  },
  async updateContentData ({ commit }) {
    const response = await api.content.get()
    commit(types.UPDATE_CONTENT_DATA, await response.data)
  },
  async updateAlbumData ({ commit }) {
    const response = await api.album.get()
    commit(types.UPDATE_ALBUM_DATA, await response.data.data)
  },
  async updateBannerData ({ commit }) {
    const response = await api.banner.get()
    commit(types.UPDATE_BANNER_DATA, await response.data)
  },
  async updateTeachingExcellenceData ({ commit }) {
    const response = await api.teachingExcellence.get()
    commit(types.UPDATE_TEACHING_EXCELLENCE_DATA, await response.data.data)
  },
  async initData ({ commit, state, dispatch }) {
    Promise.all([
      dispatch('updateMemberData'),
      dispatch('updateNewsData'),
      dispatch('updateVideoData'),
      dispatch('updateNavigationData'),
      dispatch('updateContentData'),
      dispatch('updateAlbumData'),
      dispatch('updateBannerData'),
      dispatch('updateTeachingExcellenceData')
    ])
  },
  async switchLanguage ({ commit, state, dispatch }, language) {
    api.switchLanguage(await language)
    await dispatch('initData')
  },
  async ApiRootLink ({ commit, state, dispatch }) {
    return await this.api.rootLink
  }
}
