import axios from 'axios'

import store from '../store'
import router from '../router'

/* eslint-disable no-param-reassign */

let numberOfAjaxCallPending = 0

function checkLoadingState(state) {
  if (state) {
    numberOfAjaxCallPending += 1
    store.commit('isLoading')
  } else {
    numberOfAjaxCallPending -= 1
    if (numberOfAjaxCallPending === 0) {
      store.commit('isNotLoading')
    }
  }
}

// Add a request interceptor
axios.interceptors.request.use(
  cfg => {
    checkLoadingState(true)

    if (store.getters.isAuthenticated) {
      cfg.headers['x-access-token'] = store.getters.auth
    }
    return cfg
  },
  err => {
    checkLoadingState(false)
    return Promise.reject(err)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  res => {
    checkLoadingState(false)
    return res
  },
  err => {
    checkLoadingState(false)

    if (err.response.status === 401 || err.response.status === 403) {
      store.commit('setAuthentication')
      router.push({
        path: '/auth/login',
        query: {
          redirect: router.app._route.fullPath,
        },
      })
    }
    return Promise.reject(err)
  },
)

export default axios
