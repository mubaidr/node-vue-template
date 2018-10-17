import vue from 'vue'
import vuex from 'vuex'

import userModule from './user'
import stateModule from './state'

vue.use(vuex)

const store = new vuex.Store({
  modules: {
    user: userModule,
    state: stateModule,
  },
})

export default store
