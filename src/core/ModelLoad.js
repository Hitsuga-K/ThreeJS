import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { MODELS_CONFIG } from '../config/model.js';

export class ModelLoad{
    constructor(scene){
        this.scene = scene;
        this.model = null;
        this.position = new THREE.Vector3(2,1,4);
    }

    async load(index){
        const url = MODELS_CONFIG.url;
        const loader = new GLTFLoader();
        loader.load(
            url[index],
            (gltf) => {
                this.model = gltf.scene;
                this.model.position.set(
                    this.position.x,
                    this.position.y,
                    this.position.z
                );

                this._updatePosition();
                console.log(this.model);
                this.scene.add(this.model);
            }
        );
    }
    _updatePosition(){
        this.position.x += this.position.x
        this.position.y += this.position.y
    }
}
