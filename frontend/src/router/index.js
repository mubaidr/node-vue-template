import vue from 'vue'
import vueRouter from 'vue-router'
// import store from './../store'

vue.use(vueRouter)

var router = new vueRouter({
  mode: 'history',
  root: '/',
  routes: []
})

router.beforeEach((to, from, next) => {})

export default router
