<template>
  <div class="footer">
    <h2 class="head">Contact Me</h2>
    <p>Feel free to reach out with any career oppurtunities, projects, or just to say 'Hi'.</p>
    <b-container style="margin-top:3rem">
      <b-row>
        <b-col>
            <img class="icon" src="https://lh3.googleusercontent.com/3eR6x1W0OjuMHkkis2CRxC5NeTVyby3FVjYxQLYjuvI-hAigNcG2P6JYT_75RlQLp099kn1aiH_LHPfELa03ksu4ORdVzlRqalZlU5Nnc3LVbKW07DE_boGn1lMhF5LKn_T_BQM0Eg=s60-p-k">
            <a href="https://www.linkedin.com/in/jacob-goldfarb/" target="_blank">LinkedIn</a>
            </b-col>
        <b-col>
            <img class="icon" src="https://lh3.googleusercontent.com/CCf-qZ6eSd7Fou-31MgUCTSOC-CxXEXZxgJWrW7kUJY4JugbSGwdVspMyamYWf3mRAjormZ1mYHoPOq8gx2sKz6QRGVqhP_c52t9aXrtTguB1zZOiwkf_A2Dgi0-S4dtoyY345x0XA=s60-p-k">
            <a href = "mailto: jacobgoldfarb1997@gmail.com">Email</a>
            </b-col>
        <b-col>
            <img class="icon" src="https://lh3.googleusercontent.com/7LPG_QAIsKurgUkundgh2MVSa6DfyQzAb19JOvEinfgvHdqFkNua7TcJluarzUsk_nYd-IxPzvJcjUayQ2bymEQG0yFn8W-Gi7NYLUbTAUoX4TfkdHMu1gWHeIKd_hY-yRKD5GGRIA=s64-p-k">
            <a href="https://github.com/jacobgoldfarb/"
            target="_blank">Github</a>
            </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
*{
  background: black;
}
.footer {
    margin-top: 5.5rem;
  padding: 1rem;
  width: 100%;
  color: white;
  background: black;
  left: 0;
  bottom: 0;
  height: 240px;
}
.head {
  font-weight: 400;
}
.icon{
    width: 35px;
    padding-right: 10px;
}
a{
    color: white !important;
    text-decoration: unset;
}
</style>
