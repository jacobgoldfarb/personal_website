<template>
  <div class="navbar">
    <b-navbar id="navbar" toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-brand class="nav-title" href="#">Jacob Goldfarb</b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-item right class="mr-5 menu-item" @click="goProjects">Projects</b-navbar-item>
          <b-navbar-item right class="mr-5 menu-item">Art</b-navbar-item>
          <b-navbar-item right class=" menu-item" style="margin-right: 10rem" @click="goHome">Home</b-navbar-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goProjects(){
              this.$router.push("/projects");

    },
    goHome(){
                    this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
.nav-title {
  color: #311847 !important; 
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 500;
}
.navbar {
  position: absolute;
  top: 0;
  margin: 0;
  padding: 1.5rem 0;
  width: 100%;
}
.menu-item{
  height: 100%;
  cursor: pointer;
}
.menu-item:hover{
  background: #FCA311;
  color: #14213d;
}
* {
    font-family: 'Work Sans', sans-serif;
  color: #311847;
  background: white;
}
</style>
