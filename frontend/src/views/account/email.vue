<template lang='pug'>
  div
    vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
</template>

<script>
  export default {
    data () {
      return {
        form: {
          model: {
            email: ''
          },
          schema: {
            groups: [
              {
                legend: '',
                fields: [
                  {
                    model: 'email',
                    type: 'input',
                    inputType: 'text',
                    label: 'Email',
                    max: 255,
                    required: true,
                    validator: ['required', 'email']
                  },
                  {
                    type: 'submit',
                    buttonText: 'Update Email Address',
                    validateBeforeSubmit: true,
                    onSubmit: this.onSubmit,
                    disabled: this.disableSubmit,
                    fieldClasses: 'btn btn-primary btn-block btn-submit-custom'
                  }
                ]
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
    created () {
      this.form.model.email = this.user.email
    },
    methods: {
      onSubmit () {
        this.$axios
          .post()
          .then(res => {
            this.$store.commit('setAuthentication', res.data)
            swal('Success!', 'Email address has been updated successfuly.', 'success')
          })
          .catch(() => {
            this.form.model.email = this.user.email
            swal('Error', 'Please try again!', 'error')
          })
      }
    }
  }
</script>

<style lang='stylus'>
</style>
