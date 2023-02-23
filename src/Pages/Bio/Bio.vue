<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../../Composables/pageObserver';

const bioPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageObserver(
    bioPage,
    () => highlightMe(true),
    () => highlightMe(false)
);
</script>

<template>
    <section ref="bioPage" :class="highlightClass">
        <h1>Bio</h1>
    </section>
</template>
