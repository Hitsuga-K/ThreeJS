import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export class ModelLoad{
    constructor(scene){
        this.scene = scene;
        this.model = null;
    }

    async load(){
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync('./src/models/freighter.glb');
        this.model = gltf.scene;
        console.log(this.model);
        this.model.position.set(10,10,10);
        this.scene.add(this.model);
    }
}
