import * as THREE from 'three';

export class PartsShip{
    constructor(){
        this.ship = null;
    }

    createCabin(){
        const sprite = new THREE.Sprite( new THREE.TextureLoader().load( '../../textures/kryto.png' ) );
        const geometry = new THREE.CylinderGeometry( 1, 1, 0.5, 20 );
        const material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
        this.cabin = new THREE.Mesh( geometry, material ); 
        return this.cabin;
    }
}
