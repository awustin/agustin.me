<script setup>
const onReady = model => {
    const children = model.scene.children;
    setInterval(() => {
        children[0].rotation.x += 0.01;
        children[0].rotation.y += 0.02;
        children[0].rotation.z -= 0.02;
    },25)
    // console.log(children[0])
};

</script>

<template>
    <div class="scene">
        <div class="scene__item scene__item--pos1">
            <renderer ref="renderer" antialias resize="{{true}}">
                <camera :position="{ z: 15 }"></camera>
                <scene background="#ffffff">
                    <ambient-light color="#ffffff"></ambient-light>
                    <point-light color="#ffffff" :position="{ z: 20 }"></point-light>
                    <!-- <point-light color="#ffffff" :position="{ y: 20 }"></point-light>
                    <point-light color="#ffffff" :position="{ x: 20 }"></point-light> -->
                    <GltfModel
                        src="/src/assets/objects/testcube.glb"
                        @load="onReady"
                        @progress="onProgress"
                        @error="onError"
                        ref="testcube"
                    />
                </scene>
            </renderer>
        </div>
        <div class="scene__item scene__item--pos2">&ThinSpace;</div>
        <div class="scene__item scene__item--pos3">&ThinSpace;</div>
        <div class="scene__item scene__item--pos4">&ThinSpace;</div>
    </div>
</template>

<style scoped>
.scene {
    position: absolute;
    top: 10vh;
    left: 10vw;
    height: 80vh;
    width: 80vw;
    border: 1px dashed black;
}

.scene__item {
    position: absolute;
    border: 1px dashed black;
}

.scene__item--pos1 {
    width: 33%;
    height: 55%;
}
.scene__item--pos2 {
    left: 33%;
    width: 33%;
    height: 55%;
    margin-left: 2%;
}
.scene__item--pos3 {
    right: 0;
    width: 30%;
    height: 80%;
}
.scene__item--pos4 {
    top: 50%;
    width: 60%;
    height: 30%;
    margin-top: 12%;
}
</style>