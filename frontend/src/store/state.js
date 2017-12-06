export default {
  state: {
    loading: false,
    cache: null
  },
  mutations: {
    isLoading (state) {
      state.loading = true
    },
    isNotLoading (state) {
      state.loading = false
    },
    setCache (state, c) {
      state.cache = c
    }
  },
  getters: {
    isLoading (state) {
      return state.loading
    },
    cache (state) {
      return state.cache
    }
  }
}
