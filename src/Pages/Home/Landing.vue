<script setup>
import BlogSection from '../../Components/Blog/BlogSection.vue';
import CareerSection from '../../Components/Career/CareerSection.vue';
import GreetingsSection from '../../Components/Home/GreetingsSection.vue';
import KnowMe from '../../Components/KnowMe/KnowMe.vue';
import ScrollController from '../../Components/Navigation/ScrollController.vue';
import ProjectsSection from '../../Components/Projects/ProjectsSection.vue';
import SkillsSection from '../../Components/Skills/SkillsSection.vue';
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
