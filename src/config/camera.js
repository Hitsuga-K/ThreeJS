export const CAMERA_CONFIG = {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: { x:5, y: 8, z: 10 },
    target: { x: 0, y: 0, z: 0 },
    controls: {
        enableDamping: true, // плавность
        dampingFactor: 0.1, // коэффициент плавности
        autoRotate: false, // автоматическое поворота
        enableZoom: true, // Включаем зум
        enablePan: true, // панорама
        rotateSpeed: 0.5, // скорость поворота
    }
}