import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
import MyModule from './modules/myModule'
import Login from './modules/Login'
import Content from './modules/Content'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {
  //   admission: MyModule,
  //   album: MyModule,
  //   banner: MyModule,
  //   content: Content,
  //   eventHighlight: MyModule,
  //   member: MyModule,
  //   navigation: MyModule,
  //   news: MyModule,
  //   user: MyModule,
  //   video: MyModule,
  //   login: Login,
  //   teachingExcellence: MyModule
  // },
  state,
  mutations,
  getters,
  actions,
  strict: true
})
