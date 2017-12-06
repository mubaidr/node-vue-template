<template lang='pug'>
  .row
    .col-md-6.offset-md-3
      h2 Account
      br
      p Update your email address.
      email-view
      br
      hr
      br
      p Set a new password for your account.
      password-view
</template>

<script>
  import passwordView from './password'
  import emailView from './email'

  export default {
    components: {
      'password-view': passwordView,
      'email-view': emailView
    }
  }
</script>

<style lang='stylus'>
</style>
