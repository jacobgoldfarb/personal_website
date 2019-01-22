<template>
  <div class="resume">
      <div class="heading">Resumé</div>
      <div class="sub-heading">Work Experience</div>
      <div class="experience-heading">Software Developer, TD Labs, Kitchener, ON — September 2018 - December 2018</div>
      <ul>
          <li>Developed TD’s first ever open-source project, Sketch2App; a framework that allows the user to photograph a hand-drawn wireframe, and then converts it into a functioning iOS app.</li>
          <li>Created a new, custom CoreML machine-learning model using TuriCreate which was 12x smaller than the previous Keras model, and thus didn’t rely on a backend, yet maintained precision of 85%.</li>
          <li>Created a multitude of projects based on product statements to help TD in different areas throughout the work term.</li>
        </ul>
             <div class="experience-heading">macOS/iOS Software Engineer, Zurapps Research, Toronto, ON — January 2018 - April 2018</div>
      <ul>
          <li>Worked rearchitecting a mathematical word processor iPad app, called MathPad, in Swift.</li>
          <li>Restructured and reorganized MathPad to improve modularity, clarity, and speed.</li>
          <li>Worked maintaining, fixing, and adding features to RoadTripper based on user feedback.</li>
        </ul>
                   <div class="experience-heading">Infantry Sergeant, Israel Defence Forces, Israel — December 2015 - June 2017</div>
      <ul>
          <li>Learned discipline, perseverance, reasoning, and time management during 4 months of basic training (Rifleman 05) and 4 months of advanced training (Rifleman 07) throughout 2016.</li>
        </ul>
              <div class="sub-heading">Skills</div>
              <p><span class="emphasized">Programming Languages:</span> Swift, Objective-C, C++, Python, Java, JavaScript, HTML, CSS</p>
                <p><span class="emphasized">Technologies:</span> Node.JS, Vue.js, Boostrap 4, Git, Firebase, Dialogueflow, Flask, jQuery</p>
            <p><span class="emphasized">Design Softwares:</span> Sketch, Adobe Photoshop, Animate, InDesign, Illustrator, and Dreamweaver, and SolidWorks</p>
            <p><span class="emphasized">Interests:</span> Chess, Muay Thai, Colourization, Graphic Design, Basketball, Soccer</p>
      <div class="sub-heading">Education</div>
             <div class="experience-heading">University of Waterloo, Waterloo, ON - BASc Candidate, September 2017 — Current</div>
             <ul>
                 <li>Currently enrolled in Systems Design Engineering at University of Waterloo maintaining a 3.8 GPA.</li>
                 <li>Relevant Courses: Digital Systems, Data Structures &amp; Algorithms, Human Factors in Design, Entrepreneurial Strategy</li>
                 <li>Member of UW Data Science Club, Fintech Club, Chess Club</li>
                     </ul>




  </div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style scoped>
.resume{
    box-shadow: -2px 2px 5px rgba(88, 88, 88, 0.5);
    width: 80%;
    overflow: auto;
    margin: 5rem auto;
    padding-bottom: 2rem;
}
.sub-heading{
  font-family: 'Roboto';
  font-weight: 500;
  padding: 2rem 0 0 3rem;
  color: #991F1F; 
  text-align: left;
  font-size: 20px;
  }
.experience-heading{
    font-weight: 500;
    font-size:16px;
    color: black;
    text-align: center;
    margin: 1rem auto;
}
ul{
    text-align: left;
    margin-left: 2rem;
    margin-right: 3rem;
}
.emphasized{
    font-weight:500;
}
*{
    text-align: left;
}
p{
    margin-top: 1rem;
    margin-left: 3rem;
}
</style>
