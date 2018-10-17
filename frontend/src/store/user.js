import session from '../utilities/session'
import axios from '../utilities/axios'
import config from '../config'
import router from '../router'
/* eslint-disable no-param-reassign */

export default {
  state: {
    auth: session.getAuth(),
    user: session.getUser(),
  },
  getters: {
    isAuthenticated(state) {
      return state.auth !== null && typeof state.auth !== 'undefined'
    },
    auth(state) {
      return state.auth
    },
    user(state) {
      return state.user
    },
  },
  mutations: {
    setAuthentication(state, obj) {
      if (obj) {
        state.auth = obj.token
        state.user = obj.login
        session.setAuthentication(obj)
      } else {
        state.auth = null
        state.user = null
        session.clear()
      }
    },
  },
  actions: {
    logout(context) {
      context.commit('setAuthentication')
      router.push('/home')
    },
    login(context, obj) {
      return axios
        .post(`${config.api}/auth/login`, obj)
        .then(res => {
          context.commit('setAuthentication', res.data)
        })
        .catch(() => {
          swal('Invalid credentials!', 'Please try again!', 'error')
        })
    },
    register(context, obj) {
      return axios
        .post(`${config.api}/auth/register`, obj)
        .then(() => {
          swal('Account created', 'Please login!', 'success')
          router.push('/login')
        })
        .catch(() => {
          swal('Invalid credentials!', 'Please try again!', 'error')
        })
    },
    updateLogin(context, obj) {
      return axios
        .post(`${config.api}/auth/user`, obj)
        .then(() => {
          swal('Account updated', 'Please login!', 'success')
        })
        .catch(() => {
          swal('Invalid data!', 'Please try again!', 'error')
        })
    },
  },
}
