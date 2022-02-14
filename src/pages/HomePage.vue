<script setup>
import BlogSection from '../components/BlogSection.vue';
import CareerSection from '../components/CareerSection.vue';
import GreetingsCover from '../components/GreetingsCover.vue';
import KnowMe from '../components/KnowMe.vue';
import ScrollController from '../components/plugins/ScrollController.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
</script>

<template>
    <ScrollController />
    <GreetingsCover />
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
</style>
