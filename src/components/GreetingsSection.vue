<script setup>
import { ref } from 'vue';

const descriptions = [
    'a developer with five years of experience in the market',
    'a Computer Engineer graduate',
    'a painting enthusiast',
    'an aesthete',
    'a creative person'
];
const index = ref(0);

const onClickDescriptions = () => index.value = (index.value == descriptions.length - 1) ? 0 : index.value + 1;
</script>

<template>
    <div id="greetings" class="section">
        <div class="greetings">
            Hello! My name is Agustín, I'm
            <div class="greetings__interactive"></div>
            <div class="greetings__underline">&ThinSpace;</div>
            <div @click="onClickDescriptions">{{ descriptions[index] }}</div>
        </div>
        <div class="scroll-down-hint">&DownArrow; Scroll down to know more!</div>
        <div class="menu">
            <div class="menu__item menu__item--color1">
                <a href="#knowme">Know me</a>
            </div>
            <div class="menu__item menu__item--color2">
                <a href="#career">Career</a>
            </div>
            <div class="menu__item menu__item--color1">
                <a href="#skills">Skills</a>
            </div>
            <div class="menu__item menu__item--color1">
                <a href="#projects">My Projects</a>
            </div>
            <div class="menu__item menu__item--color2">
                <a href="#blog">Blog</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.greetings {
    cursor: default
}
</style>
