<template>
  <div>
    <header-template v-if="isAuthenticated" />
    <header-template-anonymous v-else/>
    <div class="beta-banner">
      <div class="alert alert-info">
        <span class="badge badge-info">Beta</span>&nbsp;
        <strong>This is a new service &ndash; your feedback will help us to improve it.</strong>
      </div>
    </div>
    <div class="container body">
      <transition 
        :name="transitionName"
        appear="appear"
        mode="out-in">
        <router-view/>
      </transition>
    </div>
    <footer-template/>
  </div>
</template>

<script>
import headerAnonymous from './views/templates/header-anonymous.vue'
import header from './views/templates/header.vue'
import footer from './views/templates/footer.vue'

export default {
  name: 'App',
  components: {
    'header-template': header,
    'header-template-anonymous': headerAnonymous,
    'footer-template': footer
  },
  data() {
    return {
      transitionName: 'slide-up'
    }
  },
  watch: {
    isAuthenticated(val) {
      if (val) {
        swal('You have successfuly logged in.', 'welcome!', 'success')
        if (this.$route.query.redirect) {
          this.$router.push({
            path: this.$route.query.redirect
          })
        } else {
          this.$router.push('/home')
        }
      } else {
        // swal('You have been logged out.', 'Good bye!', 'info')
        this.$router.push('/home')
      }
    },
    $route(to, from) {
      this.setTransition(to, from)
    }
  },
  created() {},
  methods: {
    setTransition(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth === fromDepth) {
        this.transitionName = 'slide-up'
      } else {
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
}
</script>

<style lang='stylus'>
</style>
