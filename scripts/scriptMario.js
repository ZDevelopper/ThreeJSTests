import * as THREE from 'three';
import GLTFLoader from 'gltfloader';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, iw / ih);

// On charge les tableaux de vertex de la géométrie du modèle 3D
const geometry = await GLTFLoader.loadGeometry('mario.glb');

// On charge la texture du modèle 3D
const texture = new THREE.TextureLoader().load('mario.png');

const material = new THREE.MeshPhongMaterial({ map: texture });

const light = new THREE.DirectionalLight(0xeeeeee);

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
scene.add(light);

// On positionne la camera et la lumière pour une meilleure visibilité du modèle 3D
camera.position.set(0, 1.5, 4);
light.position.set(0, 4, 4);

const renderer = new THREE.WebGLRenderer({ canvas });

loop();

function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
