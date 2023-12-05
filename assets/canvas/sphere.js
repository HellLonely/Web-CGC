function mainSphere() {
    var ctxSphere;
    var radio1 = 200;
    var radio2 = 80;
    var angle = 0;
    var animationInterval;
    var canvasSphere = document.getElementById('SphereCanvas');
    var animacionEnProgreso = false;

    if (canvasSphere && canvasSphere.getContext) {
        ctxSphere = canvasSphere.getContext('2d');
    }

    function makeSphere() {
        ctxSphere.clearRect(0, 0, canvasSphere.width, canvasSphere.height);
        ctxSphere.beginPath();
        ctxSphere.strokeStyle = 'black';
        ctxSphere.arc(canvasSphere.width / 2, canvasSphere.height / 2, radio1, 0, 2 * Math.PI);
        ctxSphere.stroke();
    }

    function makeSphere2() {
        var x = canvasSphere.width / 2 + (radio1 - radio2) * Math.cos(angle);
        var y = canvasSphere.height / 2 + (radio1 - radio2) * Math.sin(angle);

        ctxSphere.beginPath();
        ctxSphere.arc(x, y, radio2, 0, 2 * Math.PI);
        ctxSphere.strokeStyle = 'red';
        ctxSphere.stroke();
    }

    function startAnimation(velocity) {
        animacionEnProgreso = true;
        animationInterval = setInterval(function () {
            makeSphere();
            makeSphere2();
            angle += 0.01;
        }, 1000 / velocity);
    }

    function stopAnimation() {
        animacionEnProgreso = false;
        clearInterval(animationInterval);
    }

    
    const slideSquare = document.getElementById('slideSphere');
    const pausaButton = document.getElementById('standButtonSphere');

    pausaButton.innerHTML = 'TurnOff';

    function toggleAnimation(velocity) {
        if (animacionEnProgreso) {
            pausaButton.innerHTML = 'Turn On';
            stopAnimation();
            canvasSphere.style.filter = 'blur(5px)';
            appendPauseSphere()
            slideSquare.disabled = true;
        } else {
            pausaButton.innerHTML = 'TurnOff';
            canvasSphere.style.filter = 'blur(0px)';
            appendPlaySphere()
            startAnimation(slideSquare.value);
            slideSquare.disabled = false;
        }
    }

    slideSquare.addEventListener('change', function (event) {
        stopAnimation();
        startAnimation(event.target.value);
        velocity = event.target.value;
    });

    pausaButton.addEventListener('click', function () {
        toggleAnimation(5); // Ajusta la velocidad predeterminada aquí
    });

    startAnimation(5);
}


/*
* Funcionalidad sobre el controlador de Pausa y Play;
*/

mainSphere();
const SphereCanvasContainer = document.getElementById('SphereCanvasContainer');

function appendPauseSphere(){
    let PauseText = document.createElement('div')
    PauseText.className = 'pause-text'
    PauseText.id = 'pauseSphere';
    PauseText.innerHTML='Game Paused'
    PauseText.style.left = SphereCanvasContainer.offsetLeft+450 + 'px';
    PauseText.style.top = SphereCanvasContainer.offsetTop+380 + 'px';
    SphereCanvasContainer.appendChild(PauseText);
}

function appendPlaySphere(){
    let PlayText = document.getElementById('pauseSphere')
    PlayText.remove();
}
