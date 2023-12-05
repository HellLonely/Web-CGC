const PongCanvasContainer = document.getElementById('PongCanvasContainer');

function mainPong() {
    var ctxPong;
    var bola = new Image();
    var canvasPong;
    var raqx = 400;
    var radio = 32;
    var bolax = 100;
    var bolay = 150;
    var ancho, alto;
    var limiteder, limiteizq, limiteup, limitedown;
    var dx = 3;
    var dy = 3;
    var velo = 25;
    var puntuacion = 0;
    var juegoPausado = false;

    canvasPong = document.getElementById('PongCanvas');
    const PongPauseButton = document.getElementById('standButtonPong');
    const PongRestart = document.getElementById('restButtonPong');

    juegoPausado = !juegoPausado;
    canvasPong.style.filter = 'blur(5px)';

    bola.src = '../assets/img/bola.png';

    if (canvasPong && canvasPong.getContext) {
        ctxPong = canvasPong.getContext('2d');

        if (ctxPong) {
            ancho = canvasPong.width;
            alto = canvasPong.height;
            limiteder = ancho - radio;
            limiteizq = -3;
            limiteup = -3;
            limitedown = alto - radio;
            ctxPong.lineWidth = radio;
            ctxPong.fillStyle = 'red';

            document.addEventListener('keydown', function (e) {
                if (!juegoPausado) {
                    if (e.key == 'ArrowLeft') {
                        if (raqx > 0) {
                            raqx = raqx - 20;
                        }
                        
                        pressButtonEffect(document.getElementById('kbd-light_10'))
                       
                    }

                    if (e.key == 'ArrowRight') {
                        if (raqx < 720) {
                            raqx = raqx + 20;
                            raqueta();
                        }

                        pressButtonEffect(document.getElementById('kbd-light_11'))
                       
                    }
                }
            });

            // Switch para pausar/renaudar el Pong

            PongPauseButton.addEventListener('click', function () {
                juegoPausado = !juegoPausado;

                if(juegoPausado){
                    canvasPong.style.filter = 'blur(5px)';
                    PongPauseButton.innerHTML = 'Renaudar Juego';
                    appendPausePong();
                }else{
                    canvasPong.style.filter = 'blur(0px)';
                    PongPauseButton.innerHTML = 'Pausar Juego';
                    appendPlayPong()
                }
            });

            PongRestart.addEventListener('click', function () {
                inicializar();
                mueve();

                if(juegoPausado){
                    canvasPong.style.filter = 'blur(5px)';
                    PongPauseButton.innerHTML = 'Renaudar Juego';
                    appendPausePong();
                }else{
                    canvasPong.style.filter = 'blur(0px)';
                    PongPauseButton.innerHTML = 'Pausar Juego';
                    appendPlayPong()
                }
            });

            mueve();

            setInterval(function () {
                if (!juegoPausado) {
                    mueve();
                }
            }, velo);
        }
        
        appendPausePong();
    }

    function inicializar() {
        raqx = 400;
        bolax = 100;
        bolay = 150;
        dx = 3;
        dy = 3;
        puntuacion = 0;
        juegoPausado = false;
    }

    function mueve() {
        ctxPong.clearRect(0, 0, canvasPong.width, canvasPong.height);
        ctxPong.drawImage(bola, bolax, bolay);
        ctxPong.font = "30px Arial";
        ctxPong.fillStyle = "black";
        ctxPong.fillText("Puntuación: " + puntuacion, 10, 30);

        verifica();
        bolax += dx;
        bolay += dy;
        raqueta();
    }

    function raqueta() {
        ctxPong.lineWidth = 10;
        ctxPong.strokeStyle = 'black';
        ctxPong.beginPath();
        ctxPong.moveTo(raqx, 550);
        ctxPong.lineTo(raqx + 80, 550);
        ctxPong.stroke();
    }

    function verifica() {
        var nbolax = bolax + dx;
        var nbolay = bolay + dy;

        if (nbolax > limiteder) {
            dx *= -1;
            nbolax = limiteder;
        }
        if (nbolax <= limiteizq) {
            dx *= -1;
            nbolax = limiteizq;
        }
        if (nbolay >= 515 && nbolax >= raqx && nbolax <= raqx + 75) {
            dy *= -1;
            nbolay = 515;
            puntuacion++;
        }
        if (nbolay > 600) {

            if(juegoPausado){
                canvasPong.style.filter = 'blur(5px)';
                PongPauseButton.innerHTML = 'Renaudar Juego';
                appendPausePong();
            }else{
                canvasPong.style.filter = 'blur(0px)';
                PongPauseButton.innerHTML = 'Pausar Juego';
                appendPlayPong()
            }

            location.reload();

            
        }
        if (nbolay <= limiteup) {
            dy *= -1;
            nbolay = limiteup;
        }

        bolax = nbolax;
        bolay = nbolay;
    }
}

mainPong();

function appendPausePong(){
    let PauseText = document.createElement('div')
    PauseText.className = 'pause-text'
    PauseText.id = 'pausePong';
    PauseText.innerHTML='Game Paused'
    PauseText.style.left = PongCanvasContainer.offsetLeft+450 + 'px';
    PauseText.style.top = PongCanvasContainer.offsetTop+380 + 'px';
    PongCanvasContainer.appendChild(PauseText);
}

function appendPlayPong(){
    let PlayText = document.getElementById('pausePong')
    if(PlayText){PlayText.remove()}
}
