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
        <router-link :to="{name: 'Home'}" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'SignUp'}" class="nav-link">Sign Up</router-link>
      </li>
       <li class="nav-item">
        <a href="#" @click="logout" class="nav-link bg-danger text-light">Logout</a>
      </li>
    </ul>
      <router-link :to="{name: 'Login'}">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
      </router-link>
  </div>
</nav>
<div class="jumbotron bg-info">
  <h1 class="text-light">Dashboard.</h1>
</div>
  </div>
</template>

<script>
// firebas econfig
import conn from '@/firebase/firebaseConfig';

export default {
  name: 'Home',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  methods: {
    logout() {
      conn.auth().signOut().then(() => {
        this.$router.push({ name: 'Login' });
      });
    },
  },
};
</script>

<style>

</style>
