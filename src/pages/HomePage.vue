<script setup>
import BlogSection from '../components/BlogSection.vue';
import CareerSection from '../components/CareerSection.vue';
import GreetingsSection from '../components/GreetingsSection.vue';
import KnowMe from '../components/KnowMe.vue';
import ScrollController from '../components/plugins/ScrollController.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
</script>

<template>
    <ScrollController />
    <GreetingsSection />
    <KnowMe />
    <CareerSection />
    <SkillsSection />
    <ProjectsSection />
    <BlogSection />
</template>

<style>
.section {
    height: 100vh;
}
::selection {
    background-color: transparent;
}
</style>
