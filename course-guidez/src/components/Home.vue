<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
  aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Course Guidez</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <router-link :to="{name: 'SignUp'}" class="nav-link">Sign Up</router-link>
      </li>
    </ul>
      <router-link :to="{name: 'Login'}">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
      </router-link>
  </div>
</nav>
<div class="jumbotron bg-info">
  <h1 class="text-light">Welcome to Course Guidez.</h1>
</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>

</style>
