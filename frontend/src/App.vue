<template lang='pug'>
  div
    transition(name='slide-up' mode='out-in')
      header-template(v-if='isAuthenticated')
      header-template-anonymous(v-else)
    .container.body
      transition(appear='' :name='transitionName' mode='out-in')
        router-view
    footer-template
</template>

<script>
  import headerAnonymous from './views/templates/header-anonymous'
  import header from './views/templates/header'
  import footer from './views/templates/footer'

  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-up'
      }
    },
    components: {
      'header-template': header,
      'header-template-anonymous': headerAnonymous,
      'footer-template': footer
    },
    watch: {
      isAuthenticated (val) {
        if (val) {
          swal('You have successfuly logged in.', 'welcome!', 'success')
          this.$router.push('/candidate')
        } else {
          swal('You have been logged out.', 'Good bye!', 'info')
          this.$router.push('/home')
        }
      },
      $route (to, from) {
        this.setTransition(to, from)
        // Trigger data fetch from mixins
        this.getCache()
      }
    },
    computed: {},
    methods: {
      setTransition (to, from) {
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
