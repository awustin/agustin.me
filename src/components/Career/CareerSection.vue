<script setup>
import CareerScene from './CareerScene.vue';
</script>

<template>
    <div id="career" class="section">
        <div class="section__title">
            <h2>Career & Education</h2>
        </div>
        <CareerScene />
    </div>
</template>

<style scoped>
.section__title {
    position: absolute;
    bottom: 10vh;
    right: 10vw;
    z-index: 100;
};
</style>