import * as THREE from 'three'
import GLTFLoader from 'gltfloader'

// Manière d'animer un mesh 3D avec une animation via un skinning et un morphing
 
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, iw / ih)

const mesh = await GLTFLoader.loadObject('bibi2.glb','bibi')
const texture = await GLTFLoader.loadTexture('bibi.png')

// Le mesh est un enfant de l'objet 3D
mesh.children[1].material = new THREE.MeshPhongMaterial({ map:texture,shininess:0 })

const light = new THREE.PointLight(0xffffff,25)

scene.add(light)
scene.add(mesh)

camera.position.set(0, 1.5, 4)
light.position.set(0, 4, 4)

const renderer = new THREE.WebGLRenderer({ canvas })

const mixer = new THREE.AnimationMixer( mesh )
// On déclenche deux animations en même temps
// Animation du squelette
mixer.clipAction( mesh.animations[ 0 ] ).setDuration( 2 ).play()
// Animation du morphing
mixer.clipAction( mesh.animations[ 1 ] ).setDuration( 2 ).play()

let t = 0
const clock = new THREE.Clock();

loop()

function loop() {
  const dt = clock.getDelta();
  t += dt
  mixer.update( dt );
  // On ajoute une oscillation sur l'axe y
  mesh.rotation.y = Math.cos(t/2)
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}