
/**
 * @param {HTMLCanvasElement} contextCanvas 
 * @param {'fill' | 'stroke'} type 
 */
function drawRect(contextCanvas, type, x, y, width, height, color = '#fff') {
    const style = `${type}Style`;
    const prevColor = contextCanvas[style];
    contextCanvas[style] = color;

    contextCanvas[`${type}Rect`](x, y, width, height);

    contextCanvas[style] = prevColor;
}


/** @type {HTMLCanvasElement}  */
const elCanvas = document.getElementById('canvas');
const contextCanvas = elCanvas.getContext('2d'); // webgl - 3D, на технологии WebGL.1, // webg2 - 3D, на технологии WebGL.2

contextCanvas.lineWidth = 10;
contextCanvas.lineJoin = 'round';
contextCanvas.globalAlpha = 0.7;

// Нарисовать квадрат
/**
 * fillRect - закращенный прямоугольник
 * fillRect(
 *      x,  - координата левого верхнего угла по X оси
 *      y,  - координата левого верхнего угла по Y оси
 *      height, - Высота
 *      width   - Ширина
 * )
 */
contextCanvas.fillRect(10, 50, 100, 70);

/**
 * strokeRect - незакращенный прямоугольник
 */
contextCanvas.strokeRect(50, 100, 100, 60);


contextCanvas.fillStyle = '#ff0000';
contextCanvas.fillRect(250, 0, 250, 400);

/**
 * clearRect - очистить область в форме прямоугольника прямоугольник
 */
contextCanvas.clearRect(450, 175, 50, 50);


// Настройки рисования
drawRect(contextCanvas, 'stroke', 150, 150, 150, 150, 'green');
contextCanvas.fillRect(10, 10, 10, 10);