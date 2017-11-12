<template lang="pug">
  div
    header-template
    router-view
    footer-template
</template>

<script>
  import header from './views/templates/header'
  import footer from './views/templates/footer'

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
