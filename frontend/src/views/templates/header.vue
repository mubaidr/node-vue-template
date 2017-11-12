<template lang="pug">
  div
    nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
      a.navbar-brand(href='#') Navbar
      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarColor01', aria-controls='navbarColor01', aria-expanded='false', aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarColor01.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          li.nav-item.active
            a.nav-link(href='#')
              | Home
              span.sr-only (current)
          li.nav-item
            a.nav-link(href='#') Features
          li.nav-item
            a.nav-link(href='#') Pricing
          li.nav-item
            a.nav-link(href='#') About
        form.form-inline.my-2.my-lg-0
          input.form-control.mr-sm-2(type='text', placeholder='Search')
          button.btn.btn-secondary.my-2.my-sm-0(type='submit') Search

</template>

<script>
  export default {
    name: 'header-template'
  }
</script>

<style lang="stylus">
</style>
