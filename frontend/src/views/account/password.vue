<template>
  <div>
    <div class="form-group">
      <label>Password</label>
      <input class="form-control"
             type="password"
             autocomplete="new-password"
             placeholder="Password"
             name="password"
             v-model="form.model.password"
             v-validate="'required|min:6|max:16'">
      <span class="invalid-feedback"
            v-show="errors.has('password')"
            v-html="errors.first('password')" />
    </div>

    <div class="form-group">
      <label>Confirm Password</label>
      <input class="form-control"
             type="password"
             autocomplete="new-password"
             placeholder="Confirm Password"
             name="confirmPassword"
             v-model="form.model.confirmPassword"
             v-validate="'confirmed'">
      <span class="invalid-feedback"
            v-show="errors.has('confirmPassword')"
            v-html="errors.first('confirmPassword')" />
    </div>

    <input class="btn btn-primary btn-block"
           type="submit"
           value="Change Password"
           :disabled="errors.any()">

    <br>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        model: {
          password: '',
          confirmPassword: ''
        }
      }
    }
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
