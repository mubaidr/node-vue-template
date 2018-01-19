export default {
  state: {
    loading: false
  },
  getters: {
    isLoading (state) {
      return state.loading
    }
  },
  mutations: {
    isLoading (state) {
      state.loading = true
    },
    isNotLoading (state) {
      state.loading = false
    }
  }
}
