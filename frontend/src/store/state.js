/* eslint-disable no-param-reassign */
import session from '../utilities/session'

export default {
  state: {
    loading: false,
    quotes: session.getQuotes(),
    quote: null,
  },
  getters: {
    isLoading(state) {
      return state.loading
    },
  },
  mutations: {
    isLoading(state) {
      state.loading = true
    },
    isNotLoading(state) {
      state.loading = false
    },
  },
  actions: {},
}
