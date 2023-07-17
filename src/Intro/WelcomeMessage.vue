<script setup>
import { ref } from 'vue';
import { useWatchPage } from '../Shared/Composables/pageEvents';

const INTRO_BLOCK = "intro-block";
const INTRO_BLOCK_TEXT = "intro-block__text";
const WELCOME_MESSAGE_UNDERLINE_CLASS = "welcome-container--underline";
const descriptions = [
    'a Computer Engineer dedicated to software',
    'a developer with five years of experience in the market',
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

useWatchPage('intro-page', ()=>console.log('hi'));
</script>

<template>
    <div :class="INTRO_BLOCK">
        <h1 :class="INTRO_BLOCK_TEXT">Hi! My name is Agustín, I'm</h1>
        <h1 @click="onClickDescriptions">{{ descriptions[index] }}</h1>
        <div :class="WELCOME_MESSAGE_UNDERLINE_CLASS">&ThinSpace;</div>
        <!-- <div v-on:current-page="() => console.log('hi')"></div> -->
    </div>
</template>

<style scoped>
.intro-block {
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
