<script setup>
import { ref } from 'vue';

const WELCOME_MESSAGE_CLASS = "welcome-message";
const WELCOME_MESSAGE_UNDERLINE_CLASS = "welcome-message__underline";
const descriptions = [
    'a developer with five years of experience in the market',
    'a Computer Engineer dedicated to software',
    'a painting enthusiast',
    'a creative person'
];
const index = ref(0);

const onClickDescriptions = () => {
    if(index.value == descriptions.length - 1) {
        index.value = 0;
    } else {
        index.value++;
    }
};
</script>

<template>
    <div :class="WELCOME_MESSAGE_CLASS">
        <h1>Hi! My name is Agustín, I'm</h1>
        <h1 @click="onClickDescriptions">{{ descriptions[index] }}</h1>
        <div :class="WELCOME_MESSAGE_UNDERLINE_CLASS">&ThinSpace;</div>
    </div>
</template>

<style scoped>
.welcome-message {
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
