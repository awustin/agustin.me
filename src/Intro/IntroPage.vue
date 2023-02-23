<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../Shared/Composables/pageObserver';
import WelcomeMessage from './WelcomeMessage.vue';

const introPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageObserver(
    introPage,
    () => highlightMe(true),
    () => highlightMe(false)
);
</script>

<template>
    <section ref="introPage" :class="highlightClass">
        <WelcomeMessage />
    </section>
</template>
