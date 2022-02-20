<script setup>
import { ref } from 'vue';

const descriptions = [
    'a developer with five years of experience in the market',
    'a Computer Engineer dedicated to software',
    'a painting enthusiast',
    'a creative person'
];
const index = ref(0);

const onClickDescriptions = () => index.value = (index.value == descriptions.length - 1) ? 0 : index.value + 1;
</script>

<template>
    <div id="greetings" class="section">
        <div class="greetings">
            <h1>Hi! My name is Agustín, I'm</h1>
            <h1 @click="onClickDescriptions">{{ descriptions[index] }}</h1>
            <div class="greetings__underline">&ThinSpace;</div>
        </div>
    </div>
</template>

<style scoped>
.greetings {
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 20vh;
    left: 20vw;
    width: 60vw;
    height: 60vh;
}
</style>
