export const LIGHT_CONFIG = {
    // основной свет
    main: {
        type: 'directional',
        color: 0xffffff,
        intensity: 1.2,
        position: {x: 1, y: 1, z: 1},
        castShadow: true,
        shadowMapSize: 1024,
    },
    // направленный свет - лучи
    ambient: {
        type: 'directional',
        color: 0xffffff,
        intensity: 0.8,
        position: {x: 0, y: 1, z: -5},
        castShadow: true,
        shadowMapSize: 1024,
    },
    // источник контрового цвета - свет сзади камеры
    rim: {
        type: 'directional',
        color: 0xffffff,
        intensity: 0.7,
        position: {x: 0, y: -2, z: 0},
        castShadow: true,
        shadowMapSize: 1024,
    },
    // нижний свет - заполняющий
    fill: {
        type: 'point',
        color: 0xffffff,
        intensity: 0.6,
        position: {x: 0, y: -2, z: 0},
        castShadow: true,
        shadowMapSize: 1024,
    },
    // подсветка
    back: {
        type: 'point',
        color: 0xffffff,
        intensity: 0.5,
        position: {x: 0, y: 1, z: -5},
        castShadow: true,
        shadowMapSize: 1024,
    }
}