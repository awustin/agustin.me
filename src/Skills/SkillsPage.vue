<script setup>
import { ref } from 'vue';
import { usePageInViewport } from '../Shared/Composables/pageEvents';

const skillsPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageInViewport(
    skillsPage
);
</script>

<template>
    <section ref="skillsPage" :class="highlightClass">
        <h1>Skills</h1>
    </section>
</template>
