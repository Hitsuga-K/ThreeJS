import * as THREE from 'three';
import { TextureLoader } from '../core/TextureLOader.js';

export class PartsShip {
  constructor() {
    this.textureLoader = new TextureLoader();
  }

  createCabin() {
    const texture = this.textureLoader.load('tex');
    const geometry = new THREE.CylinderGeometry(1, 1, 0.5, 20);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.5,
      metalness: 0.5
    });
    const cabin = new THREE.Mesh(geometry, material);
    return cabin;
  }
}
