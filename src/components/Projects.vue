<template>
  <div class="projects">
            <div class="heading">Projects</div>

      <div>
          <b-button-group class="segmented-control">
    <b-button class="control-button" :class="{ 'control--selected': !toonies, 'control--unselected': toonies }" @click="clickSegmented(); toonies=true">Toonies</b-button>
          <b-button class="control-button" :class="{ 'control--selected': !s2a, 'control--unselected': s2a }" @click="clickSegmented(); s2a=true">Sketch2App</b-button>
      <b-button class="control-button" :class="{ 'control--selected': !cortex, 'control--unselected': cortex }" @click="clickSegmented(); cortex=true">CORTEX</b-button>
      <b-button class="control-button" :class="{ 'control--selected': !drone, 'control--unselected': drone }" @click="clickSegmented(); drone=true">Drone</b-button>
      <b-button class="control-button" :class="{ 'control--selected': !carbon, 'control--unselected': carbon }" @click="clickSegmented(); carbon=true">Carbon</b-button>
      <b-button class="control-button" :class="{ 'control--selected': !pocketpatch, 'control--unselected': pocketpatch }" @click="clickSegmented(); pocketpatch=true">PocketPatch</b-button>
      <b-button class="control-button" :class="{ 'control--selected': !tracker, 'control--unselected': tracker }" @click="clickSegmented(); tracker=true">3D Tracker</b-button>
      <b-button class="control-button" :class="{ 'control--selected': !fly, 'control--unselected': fly }" @click="clickSegmented(); fly=true">Fly</b-button>
    </b-button-group>
      </div>
      
      <div class="text-container">
        <b-container>
            <b-row>
                <b-col cols="8">
                   <p>My name is Jacob Goldfarb. I’m a 21 year old engineering student studying Systems Design Engineering at University of Waterloo. I’m passionate about programming, industrial design, finance, and all things problem solving.</p>
                  <p>From here you can look at some project’s I’ve been working on and my resumé. Enjoy!</p>
                </b-col>
                <b-col cols="4">
                </b-col>
            </b-row>
        </b-container>
      </div>
  </div>
</template>

<script>
// import Navbar from './Navbar.vue'
export default {
  name: 'Projects',
  components: {
    //   Navbar
  },
  methods: {
      clickSegmented(){
          // eslint-disable-next-line
          console.log("Test...")
        this.toonies=false
        this.cortex=false
        this.drone=false
        this.carbon=false
        this.tracker=false
        this.fly=false
        this.pocketpatch=false
        this.s2a=false
      }
  },
    data (){
    return {
      toonies: true,
      cortex: false,
      drone: false,
      pocketpatch: false,
      carbon: false,
      tracker: false,
      fly: false,
      s2a: false
    }
  },
}
</script>

<style scoped>

.projects{
    /* box-shadow: -2px 2px 5px rgba(88, 88, 88, 0.5); */
    width: 80%;
    overflow: auto;
    margin: 5rem auto;
}
.text-container{
    padding: 2rem;
    text-align: left;
    /* width: 50%; */
}
.segmented-control {
  /* margin: 0 auto; */
  /* position: absolute; */
  /* display: inline; */
  margin: 2rem auto;
  height: 2.5rem;
  width: 90%;
}
.control--selected, .control--selected:active, .control--selected:hover, .control--selected:focus, .control--selected{
  background: rgb(82, 0, 0);
  box-shadow: unset;
  color: white;
  border: unset;
}
.control--unselected, .control--unselected:active, .control--unselected:hover, .control--unselected:focus {
  background: white;
    box-shadow: unset;
  color: rgb(82, 0, 0);
  /* border: unset; */
}
</style>
