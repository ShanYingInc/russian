import { types } from './mutations_types'

export const state = {
  staff: [],
  slidebar: ['none'],
  introduction: []
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
  }
}
