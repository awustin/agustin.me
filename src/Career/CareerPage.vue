<script setup>
import { ref } from 'vue';
import { usePageInViewport } from '../Shared/Composables/pageEvents';

const careerPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageInViewport(
    careerPage
);
</script>

<template>
    <section ref="careerPage" :class="highlightClass">
        <h1>Career</h1>
    </section>
</template>
