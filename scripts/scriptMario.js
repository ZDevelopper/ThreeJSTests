import * as THREE from 'three';
import GLTFLoader from 'gltfloader';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, iw / ih);

//const geometry = new THREE.BoxGeometry(1, 1, 1);
const geometry = await GLTFLoader.loadGeometry('mario.glb');

const texture = new THREE.TextureLoader().load('mario.png');

const material = new THREE.MeshPhongMaterial({ map: texture });

const light = new THREE.DirectionalLight(0xeeeeee);

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
scene.add(light);

camera.position.set(0, 1.5, 4);
light.position.set(0, 4, 4);

const renderer = new THREE.WebGLRenderer({ canvas });

loop();

function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
