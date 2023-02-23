<script setup>
import IntroPage from './Intro/IntroPage.vue';
import BioPage from './Bio/BioPage.vue';
import CareerPage from './Career/CareerPage.vue';
import SkillsPage from './Skills/SkillsPage.vue';
import BlogPage from './Blog/BlogPage.vue';

const MAIN_PAGE_CLASS = 'main-page';
const INTRO_PAGE_ID = 'intro-page';
const BIO_PAGE_ID = 'bio-page';
const CAREER_PAGE_ID = 'career-page';
const SKILLS_PAGE_ID = 'skills-page';
const BLOG_PAGE_ID = 'blog-page';
</script>

<template>
    <main :class="MAIN_PAGE_CLASS">
        <IntroPage :id="INTRO_PAGE_ID"/>
        <BioPage :id="BIO_PAGE_ID"/>
        <CareerPage :id="CAREER_PAGE_ID"/>
        <SkillsPage :id="SKILLS_PAGE_ID"/>
        <BlogPage :id="BLOG_PAGE_ID"/>
    </main>
</template>

<style>
.main-page {
    height: 140vh;
    width: 100%;
}
section {
    height: inherit;
    width: inherit;
}
.red {
    background-color: coral !important;
}
</style>
