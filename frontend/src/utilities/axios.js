import axios from 'axios'
import store from 'src/store'
import router from 'src/router'

var numberOfAjaxCallPending = 0

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
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  res => {
    checkLoadingState(false)
    return res
  },
  err => {
    checkLoadingState(false)
    switch (err.response.status) {
      case 401:
      case 403:
        store.commit('removeAuthentication')
        router.push({
          path: '/auth/login',
          query: {
            redirect: router.app._route.fullPath
          }
        })
        break
    }
    return Promise.reject(err)
  }
)

function checkLoadingState (state) {
  if (state) {
    numberOfAjaxCallPending++
    store.commit('isLoading')
  } else {
    if (--numberOfAjaxCallPending === 0) {
      store.commit('isNotLoading')
    }
  }
}

export default axios
