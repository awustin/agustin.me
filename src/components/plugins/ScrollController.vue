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
    let deltaSum = 0;
    let newPage = false;
    const isDeltaAboveThreshold = (acc) => {
        //One touchpad slide triggers from 50 to 80 wheel Events.
        //One wheel change on the mouse triggers 1 wheel Event.
        //As we can't tell which are the ticks coming from mouse vs the ones coming from touchpad,
        //We will use deltaY property:
        //One touchpad slide -> 100 to 700 accumulated delta
        //One mouse wheel -> 100 acc. delta
        let sensitivity = 300;
        return acc >= sensitivity;
    };

    document.removeEventListener('wheel', () => { });
    document.scrollingElement.scrollTo(0, sectionsOffsets[index]);

    document.addEventListener('wheel', event => {
        if (newPage) {
            setTimeout(() => {
                newPage = false;
            }, 100)
        }
        else {
            deltaSum += Math.abs(event.deltaY);
            if (isDeltaAboveThreshold(deltaSum)) {
                deltaSum = 0;
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
    document.removeEventListener('wheel', () => { });
})
</script>

<template></template>

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
