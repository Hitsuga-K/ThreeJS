import * as THREE from 'three';


export class Ship{
    constructor(scene){
        this.scene = scene;
        this.model = null;

        this.init();
    }
    init(){
        console.log(this.scene);
    }
    move(){

    }
}