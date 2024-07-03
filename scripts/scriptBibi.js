import * as THREE from 'three'
import GLTFLoader from 'gltfloader'

// Manière d'animer un mesh 3D avec une animation

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, iw / ih)

// On charge le mesh et sa géométrie car l'animation est liée au mesh et non pas uniquement à la géométrie
const mesh = await GLTFLoader.loadObject('bibi.glb','bibi')
const texture = new THREE.TextureLoader().load('bibi.png')


mesh.material = new THREE.MeshPhongMaterial({ map:texture, shininess: 0})

const light = new THREE.PointLight(0xeeeeee,25);

scene.add(light)
scene.add(mesh)

camera.position.set(0, 1.5, 4)
light.position.set(0, 4, 4)

const renderer = new THREE.WebGLRenderer({ canvas })

// Instancie un player
const mixer = new THREE.AnimationMixer( mesh )
// Joue l'animation à suivre en indiquant la durée
mixer.clipAction( mesh.animations[ 0 ] ).setDuration( 5 ).play()

// On instancie une horloge pour synchroniser l'animation
const clock = new THREE.Clock()

loop()

function loop() {
  requestAnimationFrame(loop)
  // A chaque frame, j'interroge l'horloge pour récupérer le temps écoulé depuis la dernière image
  const dt = clock.getDelta()
  mixer.update( dt )
  renderer.render(scene, camera)
}