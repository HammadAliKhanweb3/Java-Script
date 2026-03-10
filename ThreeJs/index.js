import * as THREE from "three"


const scene = new THREE.Scene()


const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000)
camera.position.z=5

scene.add(camera)

console.log(camera.position);

const cubeGeometery = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshStandardMaterial({
    color:0x00FF00
})

const cubeMesh = new THREE.Mesh(cubeGeometery,cubeMaterial)


scene.add(cubeMesh)
console.log(cubeMesh.position);

const light = new THREE.DirectionalLight(0xFFFFFF,1)
light.position.y=5
light.position.z=5

scene.add(light)
console.log(light.position);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth,innerHeight)

document.body.appendChild(renderer.domElement)

const animate = ()=>{
    cubeMesh.rotateX(0.01)
    cubeMesh.rotateY(0.01)
    cubeMesh.rotateZ(0.01)
    renderer.render(scene,camera)
}

renderer.setAnimationLoop(animate)









