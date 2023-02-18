<script setup>
import CameraControls from 'camera-controls';
import * as THREE from 'three';
import { CSS2DRenderer } from 'three-full';
import { onMounted, onUnmounted, ref, watch } from 'vue';


CameraControls.install({ THREE: THREE });
const clock = new THREE.Clock();

const cam = ref(null);
const renderer = ref(null);
const scene = ref(null);
const pointLightSun = ref(null);
const modelObj = ref({});
const camPos0 = ref({ x: 600, y: 1100, z: 900 });
const camTarget0 = ref({ toX: 600, toY: 0, toZ: 0 });

onMounted(() => {
    let prevWidth = window.innerWidth;
    const isShrinking = () => window.innerWidth < prevWidth;
    const isGrowing = () => window.innerWidth > prevWidth;

    window.addEventListener("resize", event => {
        //zoom and camera arrange
    })
});

onUnmounted(() => {
    window.removeEventListener('click', e => { console.log(e) });
})

const onModelReady = model => {
    modelObj.value = model;
};

const css2DLabelSetup = () => {
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(500, 500);
    labelRenderer.domElement.className = 'career-section-description';
    labelRenderer.domElement.innerText = 'Hi there';
    document.getElementById('career').appendChild(labelRenderer.domElement);
};

const cameraEventsSetup = (camCtrl) => {
    const rn = renderer.value.renderer;
    const cm = cam.value.camera;
    camCtrl.enabled = false;
    camCtrl.dampingFactor = 0.1;

    // Set the camera positions along the scene
    const { x, y, z } = camPos0.value;
    const { toX, toY, toZ } = camTarget0.value;
    camCtrl.setLookAt(x, y, z, toX, toY, toZ, true);

};

const lightsAndShadows = (model) => {
    const sun = pointLightSun.value.light;
    sun.distance = 3000;
    model.children.forEach( item => {
        item.material.shininess = 0;
        item.castShadow = true;
        item.receiveShadow = true;
    });
};

const correctColor = (model) => {
    const whiteObj = model.getObjectByName('Plane001');
    whiteObj.material.color = new THREE.Color( 0xffffff );

    model.getObjectByName('Plane002').material.color = new THREE.Color( 0xf2cfb1 );
    model.getObjectByName('Plane003').material.color = new THREE.Color( 0xe9b68a );
    model.getObjectByName('Plane004').material.color = new THREE.Color( 0xdf9a5e );
    model.getObjectByName('Plane005').material.color = new THREE.Color( 0xe1893c );
    model.getObjectByName('Plane006').material.color = new THREE.Color( 0xd77118 );
};

const animationMixerSetup = (objName, animName, model) => {
    const obj = model.getObjectByName(objName);
    const action = THREE.AnimationClip.findByName(model.animations, animName);

    if(obj && action) {
        const mixer = new THREE.AnimationMixer(obj);

        mixer.clipAction(action).play();
        return mixer;
    }
    return { update: () => {} }
};

// Once the model is loaded, perform setups
watch(modelObj, model => {
    console.log(model)
    const cm = cam.value.camera;
    const sc = scene.value.scene;
    const rn = renderer.value.renderer;
    const camCtrl = new CameraControls(cm, rn.domElement);

    //Model setup
    model.rotateX(-Math.PI / 4);
    model.translateZ(300);
    lightsAndShadows(model);
    correctColor(model);

    //Interaction setup
    css2DLabelSetup();
    cameraEventsSetup(camCtrl);

    //Animations setup
    //const mixer = animationMixerSetup('floatingShape', 'floatingShape|circleAround', model);

    //The render loop
    renderer.value.onBeforeRender(() => {
        const delta = clock.getDelta();
        camCtrl.update(delta);
        //mixer.update(delta);
    });
});
</script>

<template>
    <!-- Fullscreen: 1858 x 1009 (1 : 0.54) -->
    <div class="career-section-canvas">
        <Renderer ref="renderer" antialias :resize="true" background="alpha" shadow>
            <Camera ref="cam" :position="camPos0" :fov="53" :far="4000"></Camera>
            <Scene ref="scene" background="#ffffff">
                <HemisphereLight
                    color="#ffffff"
                    :intensity="1"
                    :position="{ x: -100, y: 650, z: 1000 }"
                />
                <PointLight
                    ref="pointLightSun"
                    color="#ffffff"
                    :intensity="0.3"
                    :position="{ x: -100, y: 650, z: 1000 }"
                    :shadow-map-size="{ width: 1, height: 1 }"
                    cast-shadow
                />
                <FbxModel src="/src/assets/objects/scene3/scene3.fbx" @load="onModelReady" />
            </Scene>
        </Renderer>
    </div>
</template>

<style>
.career-section-canvas {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
}

.career-section-description {
    position: absolute;
    top: 20vh;
    left: 50vw;
    width: 36vw;
    border: 1px dashed black;
    z-index: 100;
}
</style>