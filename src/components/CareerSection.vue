<script setup>
</script>

<template>
    <div id="career" class="section">
        <div class="section__title">
            <h2>Career & Education</h2>
        </div>
        <div class="section__career">
            <div class="section__career__item section__career__item--pos1">&ThinSpace;</div>
            <div class="section__career__item section__career__item--pos2">&ThinSpace;</div>
            <div class="section__career__item section__career__item--pos3">&ThinSpace;</div>
            <div class="section__career__item section__career__item--pos4">&ThinSpace;</div>
        </div>
    </div>
</template>

<style scoped>
.section__title {
    position: absolute;
    bottom: 10vh;
    right: 10vw;
}
.section__career {
    position: absolute;
    top: 10vh;
    left: 10vw;
    height: 80vh;
    width: 80vw;
    border: 1px dashed black;
}

.section__career__item {
    position: absolute;
    border: 1px dashed black;
}

.section__career__item--pos1 {
    width: 33%;
    height: 55%;
}
.section__career__item--pos2 {
    left: 33%;
    width: 33%;
    height: 55%;
    margin-left: 2%;
}
.section__career__item--pos3 {
    right: 0;
    width: 30%;
    height: 80%;
}
.section__career__item--pos4 {
    top: 50%;
    width: 60%;
    height: 30%;
    margin-top: 12%;
}
</style>