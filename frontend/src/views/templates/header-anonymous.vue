<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="navbar-nav">
      <li class="nav-item">
        <span class="navbar-brand">Frontend</span>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/home">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/about">About</router-link>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/auth/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/auth/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderTemplateAnonymous',
}
</script>

<style lang='stylus'>
</style>
