export default {
  namespaced: true,
  state () {
    return {
      data: []
    }
  },
  mutations: {
    update (state, data) {
      state.data = data
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
    }
  }
}
