<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../Shared/Composables/pageObserver';
import WelcomeMessage from './WelcomeMessage.vue';
import anime from 'animejs';

const introPage = ref(null);
const fadeIn = () => {
    anime({
        targets: introPage.value,
        opacity: 1,
        duration: 5000,
        delay: 1000,
    });
};

usePageObserver(
    introPage,
    fadeIn,
);
</script>

<template>
    <section ref="introPage" :class="highlightClass">
        <WelcomeMessage />
    </section>
</template>

<style>
#intro-page {
    opacity: 0;
}
</style>
