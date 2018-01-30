<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3">
      <div class="card text-black bg-light">
        <div class="card-body">
          <form @submit.prevent="submit">
            <h2>Register</h2>
            <p>Please provide required information to create an account.</p>

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

            <div class="form-group">
              <label>Name</label>
              <input class="form-control"
                     type="text"
                     placeholder="Name"
                     name="name"
                     v-model="form.model.name">
              <span class="invalid-feedback"
                    v-show="errors.has('name')"
                    v-html="errors.first('name')" />
            </div>

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
                   value="Register"
                   :disabled="errors.any()">

            <br>

            <router-link class="btn-link"
                         to="/auth/login">
              Already have an account?
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        model: {
          password: 'tim-password',
          confirmPassword: 'tim-password',
          username: 'tim',
          name: 'Minion Tim'
        }
      }
    }
  },
  methods: {
    ...mapActions(['register']),

    submit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.register(this.form.model)
        } else {
          swal(
            'Not so fast!',
            'Please provide required data in valid format',
            'warning'
          )
        }
      })
    }
  }
}
</script>

<style lang='stylus'>
</style>
