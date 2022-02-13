<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="full-page-container">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 860px) {
}

@media (min-width: 1024px) {
}
</style>
