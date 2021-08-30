<template>
  <div class="about">
    <div class="text-container">
      <b-container>
        <b-row>
          <b-col cols="9" class="about-col">
            <div class="hello">
              My name is
              <span class="red enlargen">Jacob Goldfarb</span>. I have a deep passion for technology and a strong entrepreneurial drive. I'm currently seeking jobs in
              <span
                class="red"
              >software engineering,</span> or
              <span class="red">product management.</span>
            </div>
          </b-col>
          <b-col cols="3">
            <div id="myImgId"></div>
          </b-col>
        </b-row>
        <b-row class="title justify-content-center">About&nbsp;
          <span class="red">Me</span>
        </b-row>
        <hr class="about-break">
        <b-row>
          <b-col>
            <img src="../assets/me.jpg" alt>
          </b-col>
          <b-col>
            <div class="about-title enlargen">Hello,</div>
            <div class="about-desc">
              <p>
               I’m a Canadian engineering student studying Systems Design Engineering at University of Waterloo. I'm currently in my final year of school and searching for new grad opportunities. Check out my resumé above to see all my relevant experience, or my projects to see some cool stuff I've been working on.
              </p>
              <p>
                I love programming, design, data and all things problem solving. When I'm not studying I like to play chess, practice Muay Thai, boulder, swim, run or ski.
              </p>
              <p>
                I'm currently seeking internship oppurtunuties for Winter 2020 in Software Engineering or Product Management. That being said, if you know of any
                opportunities I might be interested in feel free to reach out!
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.enlargen:hover{
  font-weight: 600;
}
.about {
  /* box-shadow: -2px 2px 5px rgba(88, 88, 88, 0.5); */
  width: 80%;
  overflow: auto;
  margin: 9rem auto 5rem auto;
}
.text-container {
  padding: 2rem;
  text-align: left;
  /* width: 50%; */
}
.hello {
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 2rem;
}
img {
  position: absolute;
  /* box-shadow: -2px 2px 5px rgba(88, 88, 88, 0.5); */
  /* box-shadow: 2px -2px 5px rgba(88, 88, 88, 0.5); */
  width: 20em;
  margin-left: 10%;
  margin-top: 20%;
  
  border-radius: 50%;
}
.red {
  color: #CA331E;
}
.title {
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  margin-top: 9rem;
}
.about-break {
  background-color: #CA331E;
  float: center;
  height: 3px;
}
.about-title {
  margin-top: 3rem;
  font-size: 2rem;
}

</style>
