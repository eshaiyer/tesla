// Get the container element for the 3D view
const container = document.getElementById("tesla-view");

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Create a 3D model (you would need an actual Tesla model in a format like .glb or .obj)
// For this example, we'll create a simple cube as a placeholder.
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add event listeners to control the view
let mouseX = 0;
let mouseY = 0;
let targetRotationX = 0;
let targetRotationY = 0;
const windowHalfX = container.clientWidth / 2;
const windowHalfY = container.clientHeight / 2;

container.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX) / 2;
    mouseY = (event.clientY - windowHalfY) / 2;
});

function animate() {
    requestAnimationFrame(animate);

    targetRotationX = mouseX * 0.01;
    targetRotationY = mouseY * 0.01;

    cube.rotation.x += 0.05 * (targetRotationY - cube.rotation.x);
    cube.rotation.y += 0.05 * (targetRotationX - cube.rotation.y);

    renderer.render(scene, camera);
}

animate();
