import * as THREE from 'three';

// On crée la scene qui contient tous les élèments qu'on veut afficher
const scene = new THREE.Scene();

// On crée la camera qui va afficher la scene en précisant la focale et le ratio de l'écran
const camera = new THREE.PerspectiveCamera(70, iw / ih);

// On génère une géométrie de cube via un tableau de points
const geometry = new THREE.BoxGeometry(1, 1, 1);

// On charge une texture
const texture = new THREE.TextureLoader().load('diamond.jpg');

// On crée un matériau en précisant la texture à utiliser
const material = new THREE.MeshPhongMaterial({ map: texture });

const light = new THREE.DirectionalLight(0xeeeeee);

// On crée un mesh en précisant la géométrie et le matériau
const mesh = new THREE.Mesh(geometry, material);

// On ajoute le mesh à la scene
scene.add(mesh);

// On ajoute la lumière à la scene
scene.add(light);

// On positionne la camera et la lumière
camera.position.set(0, 0, 2);
light.position.set(0,0, 2);

//On instancie le moteur de rendu qui va afficher la scene à l'écran en précisant le canvas
const renderer = new THREE.WebGLRenderer({ canvas });

// On crée une fonction qui va être appelée à chaque frame pour mettre à jour la position du cube
loop();

function loop() {
    // On demande au navigateur d'appeler la fonction loop à chaque frame
    requestAnimationFrame(loop);
    // On met à jour la position du cube
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.005;
    // Instruction pour afficher le premier rendu en précisant la scene et la camera
    renderer.render(scene, camera);
}
