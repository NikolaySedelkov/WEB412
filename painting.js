
/**
 * @param {HTMLCanvasElement} contextCanvas 
 * @param {'fill' | 'stroke'} type 
 */
function drawRect(contextCanvas, type, x, y, width, height, styleOptions) {
    const {
        fillRect,
        strokeRect,
        clearRect,
        ...prevStylesProperties
    } = contextCanvas;

    
    Object.entries(styleOptions).forEach(
        ([styleProperty, styleValue]) => {
            console.log(styleProperty, styleValue)
            contextCanvas[styleProperty] = styleValue;
        }
    );
    contextCanvas[`${type}Rect`](x, y, width, height);

    Object.entries(prevStylesProperties).forEach(
        ([styleProperty, styleValue]) => {
            contextCanvas[styleProperty] = styleValue;
        }
    );
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
drawRect(contextCanvas, 'stroke', 150, 150, 150, 150, {
    strokeStyle: 'green',
    lineWidth: 15,
    lineJoin: 'bevel',
    globalAlpha: 0.9,
});
contextCanvas.fillRect(10, 10, 10, 10);



contextCanvas.lineWidth = 2;
contextCanvas.lineJoin = 'round';
contextCanvas.globalAlpha = 1;

contextCanvas.moveTo(0, 380);
contextCanvas.lineTo(125, 330);
contextCanvas.lineTo(250, 380);

contextCanvas.closePath();

contextCanvas.stroke();
contextCanvas.fill();

/**
 * arc - нарисовать изогнутую линию
 * arc(
 *  x,  -   Координаты 
 *  y,  -       Начала дуги
 *  radius, - Радиус
 *  startAngel, - Начальный угол дуги
 *  endAngel,   - Конечный угол дуги
 *  rotateDirection - Направление дуги
 * )
 */


contextCanvas.beginPath();
contextCanvas.arc(100, 300, 40, Math.PI / 2, 3 * Math.PI / 2, false);
contextCanvas.stroke();