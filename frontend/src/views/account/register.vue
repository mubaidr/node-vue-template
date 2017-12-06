<template lang='pug'>
  .row
    .col-md-6.offset-md-3
      .card.text-black.bg-light
        .card-body
          h2 Register
          p Please provide required information to create an account.
          br
          vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
          router-link.btn-link(to='/auth/login') Already have an account?
</template>

<script>
  export default {
    data () {
      return {
        form: {
          model: {
            username: '11111-1111111-1',
            password: 'minion12345',
            confirmPassword: 'minion12345',
            email: 'tim@minion.com',
            name: 'Minion'
          },
          schema: {
            fields: [
              {
                type: 'input',
                inputType: 'email',
                label: 'Email',
                model: 'email',
                placeholder: 'abc@xyz.com',
                required: true,
                validator: ['required', 'string', 'email']
              },
              {
                type: 'input',
                inputType: 'password',
                autocomplete: true,
                label: 'Password',
                model: 'password',
                placeholder: 'Password',
                min: 8,
                max: 16,
                required: true,
                validator: ['required', 'string']
              },
              {
                type: 'input',
                inputType: 'password',
                autocomplete: true,
                label: 'Confirm Password',
                model: 'confirmPassword',
                placeholder: 'Password',
                min: 8,
                max: 16,
                required: true,
                validator: [
                  'required',
                  'string',
                  function(value, field, model) {
                    return value === model.password
                      ? []
                      : ['Password and Confirm Password fields does not match']
                  }
                ]
              },

              {
                type: 'submit',
                buttonText: 'Register',
                validateBeforeSubmit: true,
                onSubmit: this.onSubmit,
                disabled: this.disableSubmit,
                fieldClasses: 'btn btn-primary btn-block'
              }
            ]
          },
          options: {
            validateAfterLoad: false,
            validateAfterChanged: true
          }
        }
      }
    },
    methods: {
      onSubmit () {
        this.$axios
          .post()
          .then(() => {
            this.$router.push('/auth/login')
            swal('Account created successfuly.', 'Please login', 'success')
          })
          .catch(err => {
            if (err.response.status === 409) {
              this.$router.push('/auth/login')
              swal(
                'Email already registered.',
                'Please login or recover password',
                'error'
              )
            } else {
              swal('Invalid data.', err.message, 'error')
            }
          })
      }
    }
  }
</script>

<style lang='stylus'>
</style>
