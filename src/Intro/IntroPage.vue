<script setup>
import { ref } from 'vue';
import { usePageInViewport } from '../Shared/Composables/pageEvents';
import WelcomeMessage from './WelcomeMessage.vue';

const introPage = ref(null);

usePageInViewport(introPage);
</script>

<template>
    <section ref="introPage">
        <WelcomeMessage />
    </section>
</template>
