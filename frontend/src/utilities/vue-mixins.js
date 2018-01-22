import Vue from 'vue'

var mixin = {
  data () {
    return {
      _isValid: true
    }
  },
  methods: {
    // Generic form properties
    onValidated (validity) {
      this._isValid = validity
    }
  },
  computed: {
    disableSubmit () {
      return !this._isValid || this.$store.getters.isLoading
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    },
    // Generic properties
    isLoading () {
      return this.$store.getters.isLoading
    },
    user () {
      return this.$store.getters.user
    }
  }
}

Vue.mixin(mixin)
