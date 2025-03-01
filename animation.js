{
    /** @type {HTMLCanvasElement}  */
    const elCanvas = document.getElementById('canvas-animation');
    const contextCanvas = elCanvas.getContext('2d'); // webgl - 3D, на технологии WebGL.1, // webg2 - 3D, на технологии WebGL.2

    const widthCanvas = elCanvas.width;
    const heightCanvas = elCanvas.height;

    const radius = widthCanvas * 0.05;
    let x = radius + contextCanvas.lineWidth;
    let step = 5;

    const velociti = 2;
    let prevTimestamp = null;

    const animate = (timestamp)=>{
        contextCanvas.clearRect(0, 0, widthCanvas, heightCanvas);
        contextCanvas.strokeRect(0, 0, widthCanvas, heightCanvas);


        contextCanvas.beginPath();
        contextCanvas.arc(
            x, 
            heightCanvas / 2 - radius, 
            radius, 
            0, 
            2 * Math.PI, 
            false
        );
        contextCanvas.closePath();
        contextCanvas.stroke();

        if(x + step + radius > widthCanvas - contextCanvas.lineWidth)
            step = -1;
        else if(x + step - radius < contextCanvas.lineWidth)
            step = 1;

        const t = prevTimestamp !== null ? timestamp - prevTimestamp : 0
        prevTimestamp = timestamp;

        x += step * velociti * t;
        requestAnimationFrame(animate);
        
    }
    requestAnimationFrame(animate); 
   
}

