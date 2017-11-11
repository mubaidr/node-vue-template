<template>
  <div>
    <header-template></header-template>
    <!-- <router-view></router-view> -->
    <footer-template></footer-template>
  </div>
</template>

<script>
  import header from './views/header'
  import footer from './views/footer'

  export default {
    name: 'app',
    components: {
      'header-template': header,
      'footer-template': footer
    }
  }
</script>

<style lang="styl">

</style>
