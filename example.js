import * as THREE from 'three';
        // создание сцены
const scene = new THREE.Scene();
        // камера - угол наклона, расположение, размер экрана
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // отрисовка 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;
scene.add(camera);
        // освещение
const spotLight = new THREE.SpotLight(0xffffff, 1);
scene.add(spotLight);
spotLight.position.set(15, 15, 10);
const light = new THREE.AmbientLight(0x404040, 1);
scene.add(light);


const geometry = new THREE.SphereGeometry(1, 2, 1);
const as = new THREE.MeshStandardMaterial({ color: 0x800080, roughness: 0.1, metalness: 0.8 });
const sphere = new THREE.Mesh(geometry, as);
sphere.position.x = -2; 
scene.add(sphere);

const geometry1 = new THREE.ConeGeometry( 1, 0.5, 30 );
const material1 = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5, metalness: 0.5});
const cone = new THREE.Mesh(geometry1, material1 );
scene.add( cone );
cone.position.x = 2; 
const geometry2 = new THREE.CylinderGeometry( 1, 1, 0.5, 20 );
const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5, metalness: 0.5});
const cylinder = new THREE.Mesh( geometry2, material2 );
scene.add( cylinder );
cylinder.position.x = -2; 

const cubes = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5, metalness: 0.5});
const cube = new THREE.Mesh(cubes, material);
cube.position.y = 0; 
scene.add(cube);
const axes = new THREE.AxesHelper();
axes.scale.set(6, 6, 6);
scene.add(axes);

camera.position.z = 5;

function render(){
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}
render();
