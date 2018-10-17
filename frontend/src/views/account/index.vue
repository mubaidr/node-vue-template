<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3">
      <h2>Account</h2>
      <p>You can update your username or change password.</p>
      <username-view/>
      <hr>
      <password-view/>
    </div>
  </div>
</template>

<script>
import passwordView from './password.vue'
import usernameView from './username.vue'

export default {
  components: {
    'password-view': passwordView,
    'username-view': usernameView,
  },
}
</script>

<style lang='stylus'>
</style>
