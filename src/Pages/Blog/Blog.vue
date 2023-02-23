<script setup>
import { ref } from 'vue';
import { usePageObserver } from '../../Composables/pageObserver';

const blogPage = ref(null);
const highlightClass = ref(null);
const highlightMe = value => {
    highlightClass.value = (value) ? 'red' : null;
};

usePageObserver(
    blogPage,
    () => highlightMe(true),
    () => highlightMe(false)
);
</script>

<template>
    <section ref="blogPage" :class="highlightClass">
        <h1>Blog</h1>
    </section>
</template>
