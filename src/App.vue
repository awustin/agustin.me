<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style>
@import "../assets/base.css";
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cantarell:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

#app {
  margin: 0 auto;
  font-weight: normal;
}
::-webkit-scrollbar {
    width: 0;
    background: transparent;
}

h1, h2, h3 {
  /* font-family: 'Patua One', cursive; */
  /* font-family: 'Cantarell', sans-serif; */
  font-family: 'Space Grotesk', sans-serif;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

@media (min-width: 860px) {
  /*942 x 1009 (0.94 : 1)*/
}

@media (min-width: 1024px) {
  /*1412 x 1009 (1.4 : 1)*/
}
</style>
