function mainAliens() {
    var alien = new Image();
    var canvas = document.getElementById('AlienCanvas');
    var ctxAlien;

    if (canvas && canvas.getContext) {
        ctxAlien = canvas.getContext('2d');
    }

    var x, y;
    var cont = 0;
    var aliens = []; // Usaremos un arreglo para almacenar los aliens generados

    function makeCreature() {
        setInterval(function () {
            x = getRandomNumber(0, canvas.width - 64);
            y = getRandomNumber(0, canvas.height - 64);
            alien.src = '../assets/img/alien.svg';

            alien.onload = function () {
                var width = 64;
                var height = 64;
                aliens.push({ x: x, y: y, width: width, height: height });
                ctxAlien.drawImage(alien, x, y, width, height);
            }

        }, 1000)
    }

    makeCreature();
    actualizarTiempo();

    canvas.addEventListener('click', (e) => {
        let pointerX = e.offsetX;
        let pointerY = e.offsetY;

        // Verificar si se hizo clic en algún alien
        for (let i = 0; i < aliens.length; i++) {
            let alienX = aliens[i].x;
            let alienY = aliens[i].y;
            let alienWidth = aliens[i].width;
            let alienHeight = aliens[i].height;

            if (pointerX >= alienX && pointerX <= alienX + alienWidth &&
                pointerY >= alienY && pointerY <= alienY + alienHeight) {
                ctxAlien.clearRect(alienX, alienY, alienWidth, alienHeight);
                aliens.splice(i, 1); // Eliminar el alien del arreglo
                cont++;
                updateScore(cont);
                break; // Salir del bucle una vez que se haya encontrado y eliminado un alien
            }
        }
    });

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function updateScore(cont) {
        var text = 'Puntuación: ' + cont;
        ctxAlien.fillStyle = 'black';
        ctxAlien.textAlign = 'left';

        var textWidth = ctxAlien.measureText(text).width;
        ctxAlien.clearRect(10, 0, textWidth + 20, 20);

        ctxAlien.fillText(text, 10, 20);
    }

    var tiempoRestante = 60;

    function actualizarTiempo() {
        if (tiempoRestante <= 0) {
            console.log('Hola');
        } else {
            ctxAlien.font = '18px Arial';
            ctxAlien.fillStyle = 'black';
            ctxAlien.textAlign = 'right';
            ctxAlien.clearRect(canvas.width - 100, 0, 100, 20);
            ctxAlien.fillText('Tiempo: ' + tiempoRestante, canvas.width - 10, 20);
            tiempoRestante--;
            setTimeout(actualizarTiempo, 1000);
        }
    }
}

let StartGameAliens = document.getElementById('standButtonAliens');

StartGameAliens.addEventListener('click', () => {
    mainAliens();
    StartGameAliens.innerHTML = 'Juego Iniciado';
})