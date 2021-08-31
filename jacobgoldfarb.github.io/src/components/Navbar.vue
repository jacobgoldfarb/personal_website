<template>
  <div class="navbar">
    <b-navbar id="navbar" toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-brand class="nav-title" @click="goHome" style="cursor:pointer;">
          <span class="name">Jacob Goldfarb</span>
        </b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-item right class="menu-item" @click="goHome">Home</b-navbar-item>



          <b-navbar-item right class="menu-item" @click="goProjects">Projects</b-navbar-item>
          <b-nav-item-dropdown
            right
            text="Resumé"
            class="menu-item"
            style="margin-top: -0.44rem; margin-right: 4rem; margin-left: 2rem; color:red"
          >
            <b-dropdown-item
              href="https://drive.google.com/file/d/13qEcX8VAoYGpBFI7KfmkxYCFY-PcWklA/view?usp=sharing"
              target="_blank"
            >Product</b-dropdown-item>
            <b-dropdown-item
              href="https://drive.google.com/file/d/1Mq_hMidRYAccTBdaKzN-wdKEwKss_VIg/view?usp=sharing"
              target="_blank"
            >Technical</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// require('../assets/Jacob_Resume.pdf')
export default {
  name: "Navbar",
  methods: {
    goProjects() {
      this.$router.push("/projects");
    },
    goHome() {
      this.$router.push("/home");
    },
    goResume() {
      this.$router.push("/resume.pdf");
    }
  }
};
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link{
 color: #212529 !important;
}

b-navbar-item {
  padding-left: 2rem;
  padding-right: 2rem;
}
.name {
  padding-left: 2rem;
  color: #CA331E; /* rgb(177, 0, 0);*/
  letter-spacing: -2px;
  font-weight: 500;
}
a {
  text-decoration: unset;
  color: unset;
}
a:hover {
  text-decoration: unset;
  color: unset;
}
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
.menu-item {
  height: 100%;
  cursor: pointer;
}
.menu-item:hover {
  font-weight: 500;
  color: red;
}
* {
  font-family: "Work Sans", sans-serif;
  background: white;
}
</style>
