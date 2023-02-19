<script setup>
import BlogSection from '../Components/Blog/BlogSection.vue';
import CareerSection from '../Components/Career/CareerSection.vue';
import HomeSection from '../Components/Home/HomeSection.vue';
import BioSection from '../Components/Bio/BioSection.vue';
import Home from './Home/Home.vue';
import Bio from './Bio/Bio.vue';
import Career from './Career/Career.vue';
import Skills from './Skills/Skills.vue';
import Blog from './Blog/Blog.vue';
import ScrollController from '../Components/Navigation/ScrollController.vue';
import ProjectsSection from '../Components/Projects/ProjectsSection.vue';
import SkillsSection from '../Components/Skills/SkillsSection.vue';
import anime from 'animejs/lib/anime.es.js';
import { onMounted } from 'vue';

onMounted(() => {
    const gridTransition = {
        col1: '100%',
        col2: '0%'
    };
    const wheel = {
        pos: 0,
    };
    const grid = document.getElementById("animated-grid");
    const animation = anime({
        targets: gridTransition,
        col1: '20%',
        col2: '80%',
        cycles: 500,
        round: 1,
        easing: 'easeOutCirc',
        update: () => grid.style.gridTemplateColumns = `${gridTransition.col1} ${gridTransition.col2} auto`,
        autoplay: false
    });

    document.addEventListener('wheel', e => {
        const dY = e.deltaY;
        const { pos } = wheel;
        const max = 800;
        const min = 0;

        if((pos > min && pos < max)
            || (pos >= max && dY < 0)
            || (pos <= min && dY > 0)
        ) {
            wheel.pos += dY;
        }

        animation.seek((wheel.pos / max) * animation.duration);
    });
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
