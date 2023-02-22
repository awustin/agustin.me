<script setup>
import Home from './Home/Home.vue';
import Bio from './Bio/Bio.vue';
import Career from './Career/Career.vue';
import Skills from './Skills/Skills.vue';
import Blog from './Blog/Blog.vue';

const MAIN_PAGE_CLASS = 'main-page';

</script>

<template>
    <main :class="MAIN_PAGE_CLASS">
        <Home />
        <Bio />
        <Career />
        <Skills />
        <Blog />
    </main>
</template>

<style>
.main-page {
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.main-page::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
section {
    height: inherit;
    width: inherit;
}
#home-page {
    background-color: antiquewhite;
}
#bio-page {
    background-color: aquamarine;
}
#career-page {
    background-color: darkkhaki;
}
#skills-page {
    background-color: rgb(160, 230, 252);
}
#blog-page {
    background-color: rgb(188, 210, 238);
}
::selection {
    background-color: transparent;
}
</style>
