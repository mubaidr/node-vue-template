<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label>Username</label>
      <input class="form-control"
             type="text"
             autocomplete="username"
             placeholder="Username"
             name="username"
             v-model="form.model.username"
             v-validate="'required|min:3|max:16'">
      <span class="invalid-feedback"
            v-show="errors.has('username')"
            v-html="errors.first('username')" />
    </div>

    <input class="btn btn-primary btn-block"
           type="submit"
           value="Change Username"
           :disabled="errors.any()">
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        model: {
          username: ''
        }
      }
    }
  },
  created() {
    this.form.model.username = this.user.username
  },
  methods: {
    ...mapActions(['updateLogin']),
    onSubmit() {
      this.updateLogin()
    }
  }
}
</script>

<style lang='stylus'>
</style>
