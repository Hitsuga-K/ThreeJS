import * as THREE from 'three';
export class Settings{
    constructor(scene){
        this.scene = scene;
    }

    createAllHelpers(){
        this._createGridHelper();
        this._createCubeMesh();
        this._createAxesMesh();
    }

    _createGridHelper(){
        const gridHelper = new THREE.GridHelper(20,20, 0x00ffc3, 0x00ff3c);
        gridHelper.position.y = -0.5;
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0.5;
        this.scene.add(gridHelper);
    }

    _createCubeMesh() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        return cube;
    }
    
    _createAxesMesh(){
        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);
    }
}