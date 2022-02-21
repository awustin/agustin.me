<script setup>
import { ref } from 'vue';

const badges = ['One', 'Two', 'Three'];
</script>

<template>
    <div id="knowme" class="section">
        <div class="section__title">
            <h2>Know me</h2>
        </div>
        <div class="section__content">
            <div class="avatar">&ThinSpace;</div>
            <div class="bio">
                <div class="bio__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro.</p>
                </div>
                <div class="bio__detail">
                    <div class="bio__detail__img">&ThinSpace;</div>
                    <div class="bio__detail__text">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div class="bio__badges">
                    <div v-for="badge in badges" class="badge">{{ badge }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section__title {
    position: absolute;
    top: 10vh;
    left: 20vw;
}
.section__content {
    position: absolute;
    top: 20vh;
    left: 10vw;
    height: 60vh;
    width: 80vw;
    display: flex;
}

.avatar {
    flex: 1;
    border: 1px dashed black;
}

.bio {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-left: 10px;
}

.bio__detail {
    display: flex;
    align-items: center;
    height: 10vh;
}

.bio__detail__img {
    flex: 1;
    height: 100%;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px dashed black;
}

.bio__detail__text {
    flex: 4;
}

.bio__badges {
    display: flex;
    height: 10vh;
    gap: 1rem;
}

.badge {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 1px dashed black;
    text-align: center;
    justify-content: center;
}
</style>