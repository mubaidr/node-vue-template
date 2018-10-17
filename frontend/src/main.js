import Vue from 'vue'

import 'bootswatch/dist/lux/bootstrap.min.css'
import './assets/css/animations.styl'
import './assets/css/pace.styl'
import './assets/css/index.styl'
import './utilities/pace-config'
import './assets/js/pace.min'
import './utilities'

import VeeValidate from 'vee-validate'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(VeeValidate)

// eslint-disable-next-line
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App,
  },
  template: '<App/>',
})
