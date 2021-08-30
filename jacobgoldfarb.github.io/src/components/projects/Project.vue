<template>
  <div class="project">
    <div class="title">{{title}}</div>
    <div class="sub-title">{{sub_title}}</div>
    <!-- <img src="../../assets/toonies-intro-mock.png" alt="Introducing Toonies"> -->
    <img :src="img1" class="img-head">
    <div class="par">
      <p>{{par1}}</p> 
      <img class="img-1" align="left" :src="img2"> 
      <p>{{par2}}</p>
      <p>{{par3}}</p>
      <a :href="github" v-if="github !=''" class="read-more" target="_blank">Click here to see more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    sub_title: String,
    par1: String,
    par2: String,
    par3: String,
    github: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
  }
};
</script>

<style scoped>
.project{
  margin-left: 15rem;
  margin-top: -9rem;
  width: 50%;
  text-align: left;
}
.title{
  color: black;
  font-weight: 500;
  font-size: 2rem;
  text-align: left;
}
.read-more{
  color: red;
  font-weight: 500;
}
.img-head {
  position: absolute;
  width: 50%;
  margin-top: 0.7rem;
}
.img-1{
  padding: 1rem;
  width: 300px;
}
.par {
  margin-top: 26rem;
  padding-bottom: 2rem;
}
</style>
