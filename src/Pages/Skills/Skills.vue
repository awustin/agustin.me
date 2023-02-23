<template>
    <section id="skills-page" ref="skillsPage">
        <h1>Skills</h1>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../../Composables/pageObserver';

const skillsPage = ref(null);

usePageObserver(skillsPage);
</script>