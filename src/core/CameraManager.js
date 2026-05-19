import * as THREE from 'three';
import { CAMERA_CONFIG } from '../config/camera.js';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
 
export class CameraManager{
    constructor(domElement){
        this.camera = null;
        this.controls = null;
        this.domElement = domElement;
    }
    create(){
        this.camera = new THREE.PerspectiveCamera(CAMERA_CONFIG.fov, 
            window.innerWidth / window.innerHeight, 
            CAMERA_CONFIG.near, 
            CAMERA_CONFIG.far);
        this.camera.position.set(CAMERA_CONFIG.position.x, CAMERA_CONFIG.position.y, CAMERA_CONFIG.position.z);
        this.camera.lookAt(CAMERA_CONFIG.target.x, CAMERA_CONFIG.target.y, CAMERA_CONFIG.target.z);
        return this.camera;
    }
    createControls(){
        this.controls = new OrbitControls(this.camera, this.domElement);
        this.controls.enablePan = CAMERA_CONFIG.controls.enablePan;
        this.controls.enableDamping = CAMERA_CONFIG.controls.enableDamping;
        this.controls.enableZoom = CAMERA_CONFIG.controls.enableZoom;
        this.controls.dampingFactor = CAMERA_CONFIG.controls.dampingFactor;
        this.controls.autoRotate = CAMERA_CONFIG.controls.autoRotate;
        this.controls.zoom = CAMERA_CONFIG.controls.zoomSpeed;

        return this.controls;
    }
    onWindowResize(){
        if (this.camera) {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }
    }
    update(){
        if(this.controls){
            this.controls.update();
        }
    }
    getCamera(){
        return this.camera;
    }
    getControls(){
        return this.controls;
    }
}