import { types } from './mutations_types'

export const state = {
  loginStatus: {
    session: 'test_session',
    user: 'admin'
  },
  staff: [],
  staffType: 'Fulltime',
  slidebar: ['none'],
  introduction: [],
  news: [],
  video: [],
  navigation: [],
  content: {},
  album: []
}

export const mutations = {
  [types.UPDATE_STAFF_DATA] (state, data) {
    state.staff = data
  },
  [types.UPDATE_SLIDEBAR_DATA] (state, data) {
    state.slidebar = data
  },
  [types.UPDATE_INTRODUCTION_DATA] (state, data) {
    state.introduction = data
  },
  [types.UPDATE_STAFF_TYPE] (state, type) {
    state.staffType = type
  },
  [types.UPDATE_NEWS_DATA] (state, data) {
    state.news = data
  },
  [types.UPDATE_VIDEO_DATA] (state, data) {
    state.video = data
  },
  [types.UPDATE_NAVIGATION_DATA] (state, data) {
    state.navigation = data
  },
  [types.UPDATE_CONTENT_DATA] (state, data) {
    state.content = data
  },
  [types.UPDATE_ALBUM_DATA] (state, data) {
    state.album = data
  }
}
