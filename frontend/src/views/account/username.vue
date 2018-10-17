<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label>Username</label>
      <input
        v-validate="'required|min:3|max:16'"
        v-model="form.model.username"
        class="form-control"
        type="text"
        autocomplete="username"
        placeholder="Username"
        name="username">
      <span
        v-show="errors.has('username')"
        class="invalid-feedback"
        v-html="errors.first('username')" />
    </div>

    <input
      :disabled="errors.any()"
      class="btn btn-primary btn-block"
      type="submit"
      value="Change Username">
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        model: {
          username: '',
        },
      },
    }
  },
  created() {
    this.form.model.username = this.user.username
  },
  methods: {
    ...mapActions(['updateLogin']),
    onSubmit() {
      this.updateLogin()
    },
  },
}
</script>

<style lang='stylus'>
</style>
