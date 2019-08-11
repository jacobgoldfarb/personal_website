<template>

  <div class="home">
      <about/>
      <!-- <resume/> -->
  </div>
</template>

<script>
/* eslint-disable */

import About from './About.vue'
import Resume from './Resume.vue'
export default {
  name: 'Home',
  components: {
      About,
      Resume
  }
}
</script>

<style scoped>

</style>
