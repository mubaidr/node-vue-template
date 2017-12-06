<template lang="pug">
  flat-pickr.form-control(v-model='value' :disabled="disabled" :config='schema.config' :required='true' :placeholder='schema.placeholder')
</template>

<script>
  import { abstractField } from "vue-form-generator"

  export default {
    mixins: [ abstractField ]
  }
</script>
