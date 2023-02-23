<template>
    <section id="home-page" ref="homePage">
        <h1>Homepage</h1>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../../Composables/pageObserver';

const homePage = ref(null);

usePageObserver(homePage);
</script>
