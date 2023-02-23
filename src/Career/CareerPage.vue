<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../Shared/Composables/pageObserver';

const careerPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageObserver(
    careerPage,
    () => highlightMe(true),
    () => highlightMe(false)
);
</script>

<template>
    <section ref="careerPage" :class="highlightClass">
        <h1>Career</h1>
    </section>
</template>
