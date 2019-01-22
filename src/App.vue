<template>
  <div id="app">
    <navbar/>
    <router-view/>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500');

body {
    background: #E5E5E5;
}
#app {
font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 20%;
  /* margin-top:4rem; */
}
.heading{
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  margin-left: 2rem;
  margin-top: 1rem;
  text-align: left;

}
</style>
