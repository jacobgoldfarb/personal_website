<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
        <img src="./assets/cartoon_self.png" alt="" style="">

  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
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
  margin-top:4rem;
}
</style>
