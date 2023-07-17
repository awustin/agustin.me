<script setup>
import { ref } from 'vue';
import { usePageInViewport } from '../Shared/Composables/pageEvents';

const blogPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageInViewport(blogPage);
</script>

<template>
    <section ref="blogPage" :class="highlightClass">
        <h1>Blog</h1>
    </section>
</template>
