import * as THREE from 'three';
// Класс создания коробля из частей
import { PartsShip } from './PartsShip.js';
import { SHIP_CONFIG } from '../config/ship.js';

export class ShipGenerator{
    constructor(scene){
        this.scene = scene;
        this.ship = null;
        this.parts = new PartsShip(); // Инициализируем PartsShip
    }
    createShip(type_ship){
        const type_scout = SHIP_CONFIG.type.scout;
        const type_assault = SHIP_CONFIG.type.assault;
        if(type_ship === type_scout){
            this.ship.scale.set(new THREE.Vector3(type_scout.width, 0.5, type_scout.height));
        }
        this.ship = new THREE.Group();
        this.scene.add(this.ship);
        console.log(this.ship);
        let cabin = this.parts.createCabin(this.ship);
        this.ship.add(cabin);
        
        
    }
    init(){
        console.log('ShipGenerator create');
    }

}
