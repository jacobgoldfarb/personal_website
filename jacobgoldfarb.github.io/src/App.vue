<template>
  <div id="app">
    <navbar/>
    <router-view/>
     <contact/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Contact from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Contact
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,500');
* {
  background: white;
}
body {
    background: white;
}
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
img {
  width: 20%;
  /* margin-top:4rem; */
}
.heading{
  font-weight: 500;
  font-size: 2rem;
  margin-left: 2rem;
  margin-top: 1rem;
  text-align: left;

}
/*
Here you provide CSS transition declaration css-property, timing, transition effect. enter direction is from hidden -> visible and leave is the reverse direction from visible -> hidden
*/
.slide-enter-active, .slide-leave-active {
transition: margin-bottom .8s ease-out;
}

/*
you set the css property before transition starts
*/
.slide-enter, .slide-leave-to {
margin-bottom: -200px;
}

/*
you set the css property it will be when transition ends
*/
.slide-enter-to, .slide-leave {
margin-bottom: 0px;
}
</style>
