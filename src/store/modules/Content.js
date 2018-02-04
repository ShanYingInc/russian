export default {
  namespaced: true,
  state () {
    return {
      data: {},
      currentEdit: {
        title: null,
        content: null
      }
    }
  },
  mutations: {
    update (state, data) {
      state.data = data
    },
    edit (state, { title, content }) {
      state.currentEdit = { title, content }
    }
  },
  actions: {
    async update ({ commit, state }, api) {
      await api.get().then(async response => {
        console.log(await response)
        if (await response.data.data) {
          const data = await response.data.data
          commit('update', await data)
        }
        else if (await response.data) {
          const data = await response.data
          commit('update', await data)
        }
      })
    },
    async edit ({ commit, state }, { title, content }) {
      commit('edit', await { title, content })
    }
  }
}
