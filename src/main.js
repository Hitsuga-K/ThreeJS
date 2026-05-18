import * as THREE from 'three';
import {SceneManager} from './core/SceneManager.js';
import {CameraManager} from './core/CameraManager.js';
import {LightManager} from './core/LightManager.js';
import {Settings} from './utils/Settings.js';
import {ShipGenerator} from './utils/Shipgenerator.js';
import {SkySettings} from './utils/SkySetting.js';
import {ModelLoad} from './core/ModelLoad.js';


class Main{
    constructor(){
        this.sceneManager = null;
        this.cameraManager = null;
        this.renderer = null;
        this.camera = null;
        this.lightManager = null;
        this.settings = null;
        this.cube = null;
        this.time = 0;
        this.init();
        this.shipGenerator = null;
        this.skySettings = null;
        this.modelLoad = null;
    }
    init(){
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager(this.renderer.domElement);
        const scene = this.sceneManager.create();

        this.skySettings = new SkySettings(scene);
        this.skySettings.createStarts();

        this.settings = new Settings(scene);
        this.settings.createAllHelpers();
        this.cube = this.settings._createCubeMesh(); 

        const geometry1 = new THREE.ConeGeometry( 1, 0.5, 30 );
        const material1 = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5, metalness: 0.5});
        const cone = new THREE.Mesh(geometry1, material1 );
        scene.add( cone );
        cone.position.x = 2; 
        
        this.modelLoad = new ModelLoad(scene);
        this.modelLoad.load();

        // Здесь можно указать путь к модели, если она у вас есть
        // this.modelLoad.load('./models/my_model.glb');



        this.cameraManager = new CameraManager(this.renderer.domElement);
        const camera = this.cameraManager.create();
        this.cameraManager.createControls();
        camera.position.set(5, 8, 10);
        
        this.lightManager = new LightManager(scene);
        this.lightManager.creatAll();
        this.shipGenerator = new ShipGenerator(scene);
        this.shipGenerator.init();
        this.shipGenerator.createShip('scout');

               this.animate();
        window.addEventListener('resize', () => this.onWindowResize());
    }
    onWindowResize(){
        this.cameraManager.onWindowResize();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate(){
        requestAnimationFrame(() => this.animate());
        this.time += 0.016;

        if (this.cameraManager.controls) {
            this.cameraManager.controls.update();
        }

        // Вращаем один куб
        if (this.cube) {
            this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;
        }

        this.renderer.render(
            this.sceneManager.getScene(),
            this.cameraManager.getCamera()
        );
    }
}

const game = new Main();
game.animate();