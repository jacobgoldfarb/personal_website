<template>
  <div class="about">
      <div class="heading">Hello</div>
      <div class="text-container">
        <b-container>
            <b-row>
                <b-col cols="8">
                   <p>My name is Jacob Goldfarb. I’m a 21 year old engineering student studying Systems Design Engineering at University of Waterloo. I’m passionate about programming, industrial design, finance, and all things problem solving.</p>
                  <p>From here you can look at some project’s I’ve been working on and my resumé. Enjoy!</p>
                </b-col>
                <b-col cols="4">
                    <img src="../assets/me.jpg" alt="" style="width: 15em; border-radius:2rem">
                </b-col>
            </b-row>
        </b-container>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about{
    box-shadow: -2px 2px 5px rgba(88, 88, 88, 0.5);
    width: 80%;
    overflow: auto;
    margin: 9rem auto 5rem auto;
}
.text-container{
    padding: 2rem;
    text-align: left;
    /* width: 50%; */
}
</style>
