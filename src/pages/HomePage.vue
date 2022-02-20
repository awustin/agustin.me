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
    position: absolute;
    height: 100vh;
    width: 100vw;
}
#greetings {
    top: 0;
}
#knowme {
    top: 100vh;
}
#career {
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
}
::selection {
    background-color: transparent;
}
</style>
