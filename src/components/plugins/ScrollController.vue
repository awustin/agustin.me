<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    let sectionsIds = ['greetings', 'knowme', 'career', 'skills', 'projects', 'blog'];
    const getScrollOffsets = () => {
        let offsetSum = 0;
        let offsets = [];

        sectionsIds.forEach(i => {
            offsets.push(offsetSum);
            offsetSum += document.getElementById(i).clientHeight;
        });
        return offsets;
    };
    let sectionsOffsets = getScrollOffsets();
    let index = 0;
    let scrollPower = 0;
    let sensitivity = 3;
    let newPage = false;

    document.removeEventListener('wheel', () => { });
    document.scrollingElement.scrollTo(0, sectionsOffsets[index]);

    document.addEventListener('wheel', event => {
        if (newPage) {
            setTimeout(() => {
                newPage = false;
            }, 100)
        }
        else {
            scrollPower++;
            if (scrollPower >= sensitivity) {
                scrollPower = 0;
                if (event.deltaY > 0) {
                    if (index < sectionsIds.length - 1) index++;
                }
                else {
                    if (index > 0) index--;
                };
                let page = document.getElementsByClassName('section')[index];
                if (page) {
                    setTimeout(() => {
                        document.scrollingElement.scrollTo(0, sectionsOffsets[index]);
                        newPage = true;
                    }, 50);
                }
            }
        }
    });
})

onUnmounted(() => {
})
</script>

<template>
</template>

<style>
html {
    overflow-y: hidden;
    scroll-behavior: smooth;
}
::-webkit-scrollbar {
    width: 0;
    background: transparent;
}
</style>
