import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");
const size = { width: 800, height: 600 };

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1); // shape: width, height, depth
const material = new THREE.MeshBasicMaterial({ color: 0xf8acd6 }); // how it looks
const cube = new THREE.Mesh(geometry, material);

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height); // the way the human eye sees

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });

// Add object to scene
scene.add(cube);
camera.position.z = 3;

// Rendering the scene
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
