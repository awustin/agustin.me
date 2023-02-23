<script setup>
import Intro from './Intro/Intro.vue';
import Bio from './Bio/Bio.vue';
import Career from './Career/Career.vue';
import Skills from './Skills/Skills.vue';
import Blog from './Blog/Blog.vue';

const MAIN_PAGE_CLASS = 'main-page';
const INTRO_PAGE_ID = 'intro-page';
const BIO_PAGE_ID = 'bio-page';
const CAREER_PAGE_ID = 'career-page';
const SKILLS_PAGE_ID = 'skills-page';
const BLOG_PAGE_ID = 'blog-page';
</script>

<template>
    <main :class="MAIN_PAGE_CLASS">
        <Intro :id="INTRO_PAGE_ID"/>
        <Bio :id="BIO_PAGE_ID"/>
        <Career :id="CAREER_PAGE_ID"/>
        <Skills :id="SKILLS_PAGE_ID"/>
        <Blog :id="BLOG_PAGE_ID"/>
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
    overflow-y: hidden;
}
::selection {
    background-color: transparent;
}
.red {
    background-color: coral !important;
}
</style>
