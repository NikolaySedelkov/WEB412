{
    /** @type {HTMLCanvasElement} */
    const elCanvas = document.getElementById("canvas-animation");

    const ctx = elCanvas.getContext('2d');

    document.getElementById('range').addEventListener(
        'input', 
        (e) => {
            ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);

            const value = +e.target.value;
            const maxValue = +e.target.max;

            const angle = value / maxValue * Math.PI * 2;

            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.arc(
                100, 
                100,
                100,
                0, 
                angle
            )
            ctx.lineTo(100, 100);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = 'red';

            ctx.arc(
                100, 
                100,
                100,
                angle, 
                Math.PI * 2
            )
            ctx.lineTo(100, 100);
            ctx.fill();
            ctx.stroke();

        }
    )
}


{
    /** @type {HTMLCanvasElement} */
    const elCanvas = document.getElementById("canvas");

    const ctx = elCanvas.getContext('2d');

    ctx.beginPath();

    ctx.lineJoin = 'round';

    ctx.arc(
        50, // координа ЦЕНТРА по X
        50, // Координата ЦЕНТРА по Y
        50, // Радиус
        0, // Начальный угол В РАДИАНАХ
        Math.PI * 0.95, // Конечный угол в радианах,
        true
    );

    /*
    ctx.arc(
        100, // координа ЦЕНТРА по X
        50, // Координата ЦЕНТРА по Y
        100, // Радиус
        Math.PI * 1.05, // Начальный угол В РАДИАНАХ
        Math.PI * 0.95, // Конечный угол в радианах,
    );
    */

    ctx.lineTo(100, 130);
    ctx.lineTo(200, 50);

    ctx.arc(
        150, // координа ЦЕНТРА по X
        50, // Координата ЦЕНТРА по Y
        50, // Радиус
        0, // Начальный угол В РАДИАНАХ
        Math.PI, // Конечный угол в радианах,
        true
    );

    ctx.stroke();
}
