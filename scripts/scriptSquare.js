import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, iw / ih);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const texture = new THREE.TextureLoader().load('diamond.jpg');

const material = new THREE.MeshPhongMaterial({ map: texture });

const light = new THREE.DirectionalLight(0xeeeeee);

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
scene.add(light);

camera.position.set(0, 0, 2);
light.position.set(0,0, 2);

const renderer = new THREE.WebGLRenderer({ canvas });

loop();

function loop() {
    requestAnimationFrame(loop);
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.005;
    renderer.render(scene, camera);
}
