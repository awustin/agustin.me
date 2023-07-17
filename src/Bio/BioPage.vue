<script setup>
import { ref } from 'vue';
import { usePageInViewport } from '../Shared/Composables/pageEvents';

const bioPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageInViewport(bioPage);
</script>

<template>
    <section ref="bioPage" :class="highlightClass">
        <h1>Bio</h1>
    </section>
</template>
