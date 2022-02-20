<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cantarell:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');

#app {
  /* max-width: 1280px; */
  margin: 0 auto;
  /* padding: 2rem; */

  font-weight: normal;
}

h1, h2, h3 {
  /* font-family: 'Patua One', cursive; */
  /* font-family: 'Cantarell', sans-serif; */
  font-family: 'Space Grotesk', sans-serif;
}

h1 {
  font-size: 4rem;
}

@media (min-width: 860px) {
  /*942 x 1009 (0.94 : 1)*/
}

@media (min-width: 1024px) {
  /*1412 x 1009 (1.4 : 1)*/
}
</style>
