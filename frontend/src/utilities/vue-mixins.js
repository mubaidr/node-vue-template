import Vue from 'vue'
import { mapGetters } from 'vuex'

const mixin = {
  computed: {
    ...mapGetters(['isLoading', 'isAuthenticated', 'user']),
  },
}

Vue.mixin(mixin)
