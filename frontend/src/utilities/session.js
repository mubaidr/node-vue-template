export default {
  setAuthentication (obj) {
    window.localStorage.setItem('auth', JSON.stringify(obj))
  },
  getAuth () {
    let auth = JSON.parse(window.localStorage.getItem('auth'))
    return auth ? auth.token : null
  },
  clear () {
    window.localStorage.clear()
  }
}
