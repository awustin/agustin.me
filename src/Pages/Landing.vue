<script setup>
import Home from './Home/Home.vue';
import Bio from './Bio/Bio.vue';
import Career from './Career/Career.vue';
import Skills from './Skills/Skills.vue';
import Blog from './Blog/Blog.vue';
import { onMounted } from 'vue';
import { onWheel } from '../Utils/transitions';

onMounted(() => {
    onWheel();
});
</script>

<template>
    <div id="animated-grid">
        <Home />
        <Bio />
        <Career />
        <Skills />
        <Blog />
    </div>
</template>

<style>
#animated-grid {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 100% auto auto;
    grid-template-rows: 100% auto auto;
    grid-template-areas: 
        "home bio blog"
        "career career blog"
        "skills skills blog";
    overflow: hidden;
}
/* .section {
    position: absolute;
    height: 100vh;
    width: 100vw;
} */
/* #home {
    top: 0;
} */
/* #bio {
    top: 100vh;
} */
/* #career {
    top: 200vh;
}
#skills {
    top: 300vh;
}
#projects {
    top: 400vh;
}
#blog {
    top: 500vh;
} */
::selection {
    background-color: transparent;
}
</style>
