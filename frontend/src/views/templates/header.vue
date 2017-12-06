<template lang='pug'>
  nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
    ul.navbar-nav
      li.nav-item
        router-link.navbar-brand(to='/home') ORS
      li.nav-item
        router-link.nav-link(to='/home') Home
      li.nav-item
        router-link.nav-link(to='/candidate') Profile
    ul.navbar-nav.ml-auto
      li.nav-item
        router-link.nav-link(to='/account') My Account
      li.nav-item
        span.nav-link.custom-link(@click='logout') Logout
</template>

<script>
  export default {
    name: 'header-template',
    methods: {
      logout () {
        swal({
          title: 'Are you sure you want to logout?',
          text: '',
          icon: 'warning',
          buttons: {
            cancel: {
              text: 'Cancel',
              visible: true
            },
            confirm: {
              text: 'Yes'
            }
          },
          dangerMode: true
        }).then(confirm => {
          if (confirm) {
            this.$router.push('/auth/logout')
          }
        })
      }
    }
  }
</script>

<style lang='stylus'>
  .custom-link {
    cursor: pointer;
  }
</style>
