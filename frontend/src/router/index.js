import vue from 'vue'
import vueRouter from 'vue-router'
// import store from './../store'

import index from '../views'

vue.use(vueRouter)

var router = new vueRouter({
  mode: 'history',
  root: '/',
  routes: [
    {
      path: '/',
      component: index
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
