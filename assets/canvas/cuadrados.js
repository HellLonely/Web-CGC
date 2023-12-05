function mainSquare() {

    var ctxSphere;
    var canvasSquare = document.getElementById('SquareCanvas');

    if (canvasSquare && canvasSquare.getContext) {
        ctxSphere = canvasSquare.getContext('2d');
    }

    var enable = false;

    const slide = document.getElementById('slideSquare');
    const button = document.getElementById('standButtonSquare');


    button.innerHTML = 'Start Game';

    button.addEventListener('click', () => {
        enable = !enable;
        if (enable) {
            startAnimation();
            button.innerHTML = 'Turn Off';
            canvasSquare.style.filter = 'blur(0px)';
            appendPlaySquare()
        } else {
            stopAnimation();
            button.innerHTML = 'Turn On';
            canvasSquare.style.filter = 'blur(5px)';
            appendPauseSquare();
        }
    });

    let colores = ['red', 'black', 'white', 'aqua', 'yellow', 'brown', 'orange', 'purple', 'green'];
    let x = 0;
    let y = 0;

    let intervalId = null;

    function startAnimation() {
        if (intervalId === null) {
            const speed = slide.value;
            animation(speed);
        }
    }

    function stopAnimation() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function animation(speed) {
        stopAnimation();
        speed *= 500;
        intervalId = setInterval(function () {
            ctxSphere.clearRect(0, 0, canvasSquare.width, canvasSquare.height);
            for (let i = 0; i < 7; i++) {
                ctxSphere.fillStyle = colores[Math.floor(Math.random() * colores.length)];
                ctxSphere.globalAlpha = 0.5;

                ctxSphere.beginPath();
                ctxSphere.moveTo(x, y);
                ctxSphere.lineTo(x, y + 200);
                ctxSphere.lineTo(x + 200, y + 200);
                ctxSphere.lineTo(x + 200, y);

                ctxSphere.stroke();
                ctxSphere.fill();
                ctxSphere.closePath();

                x += 100;
                y += 100;
            }

            y = 0;
            x = 0;
        }, speed);
    }

    slide.addEventListener('input', () => {
        const speed = slide.value;
        if (enable) {
            animation(speed);
        }
    });
}

mainSquare();

/*
* Funcionalidad sobre el controlador de Pausa y Play;
*/


const SquareCanvasContainer = document.getElementById('SquareCanvasContainer');

function appendPauseSquare(){
    let PauseText = document.createElement('div')
    PauseText.className = 'pause-text'
    PauseText.id = 'pauseSquare';
    PauseText.innerHTML='Game Paused'
    PauseText.style.left = SquareCanvasContainer.offsetLeft+450 + 'px';
    PauseText.style.top = SquareCanvasContainer.offsetTop+380 + 'px';
    SquareCanvasContainer.appendChild(PauseText);
}

function appendPlaySquare(){
    let PlayText = document.getElementById('pauseSquare')
    PlayText.remove();
}