import * as THREE from 'three';
import { TEXTURE_CONFIG } from '../config/texture.js';

export class TextureLoader {
  constructor() {
    this.loader = new THREE.TextureLoader();
  }

  load(textureName = 'tex') {
    const url = TEXTURE_CONFIG?.url?.[textureName]?.albedo;
    if (!url) {
      console.error(`Ошибка: TEXTURE_CONFIG.url['${textureName}'].albedo не найден`);
      return null;
    }

    // создаём переменную texture вне колбэка
    const texture = this.loader.load(url);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }
}
