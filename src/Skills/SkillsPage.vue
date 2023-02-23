<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../Shared/Composables/pageObserver';

const skillsPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageObserver(
    skillsPage,
    () => highlightMe(true),
    () => highlightMe(false)
);
</script>

<template>
    <section ref="skillsPage" :class="highlightClass">
        <h1>Skills</h1>
    </section>
</template>
