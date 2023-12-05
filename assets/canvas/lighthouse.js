
function lighthouse() {
    var ctxLightHouse;
    var canvasLighthouse = document.getElementById('LighthouseCanvas');

    if (canvasLighthouse && canvasLighthouse.getContext) {
        ctxLightHouse = canvasLighthouse.getContext('2d');
    }

    function makeLigthhouse(){
        
        ctxLightHouse.strokeStyle='black';

        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='blue';
        ctxLightHouse.moveTo(40, 550);
        ctxLightHouse.lineTo(170, 550);
        ctxLightHouse.lineTo(170, 570);
        ctxLightHouse.lineTo(40, 570);

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();
        
        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='red';

        ctxLightHouse.moveTo(50,550);
        ctxLightHouse.lineTo(160,550);
        ctxLightHouse.lineTo(150,500);
        ctxLightHouse.lineTo(60,500);

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();

        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='white';

        ctxLightHouse.moveTo(60,500);
        ctxLightHouse.lineTo(150,500);
        ctxLightHouse.lineTo(140,450);
        ctxLightHouse.lineTo(70,450);

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();


        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='red';

        ctxLightHouse.moveTo(70,450);
        ctxLightHouse.lineTo(140,450);
        ctxLightHouse.lineTo(130,400);
        ctxLightHouse.lineTo(80,400);

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();

        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='white';

        ctxLightHouse.moveTo(80,400);
        ctxLightHouse.lineTo(130,400);
        ctxLightHouse.lineTo(125,350);
        ctxLightHouse.lineTo(85,350);

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();

        ctxLightHouse.beginPath()
        ctxLightHouse.fillStyle='blue';
        ctxLightHouse.moveTo(80,350)
        ctxLightHouse.lineTo(80,340)
        ctxLightHouse.lineTo(130,340)
        ctxLightHouse.lineTo(130,350)

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();

        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='yellow';
        ctxLightHouse.moveTo(85,340)
        ctxLightHouse.lineTo(85,290)
        ctxLightHouse.lineTo(125,290)
        ctxLightHouse.lineTo(125,340)

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();

        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='blue';

        ctxLightHouse.moveTo(60,290);
        ctxLightHouse.lineTo(105,250);
        ctxLightHouse.lineTo(150,290);

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();

    }   

    function clear(){
        ctxLightHouse.clearRect(85, 290, 40, 50);
    }

    function draw(){
        ctxLightHouse.beginPath();
        ctxLightHouse.fillStyle='yellow';
        ctxLightHouse.moveTo(85,340)
        ctxLightHouse.lineTo(85,290)
        ctxLightHouse.lineTo(125,290)
        ctxLightHouse.lineTo(125,340)

        ctxLightHouse.closePath();
        ctxLightHouse.stroke();
        ctxLightHouse.fill();

        /*
        const gradienteLineal = ctxLightHouse.createLinearGradient(125, 240, 200, 200); 
                // Agregar colores al gradiente
        gradienteLineal.addColorStop(0, 'yellow');    // Punto de inicio: rojo
        gradienteLineal.addColorStop(1, 'rgba(255,255,0,0)');   // Punto final: azul

        ctxLightHouse.fillStyle = gradienteLineal;
        ctxLightHouse.fillRect(125, 160, 200, 200);
        */
    }


    let mode = true

    setInterval(() => {
        if (mode) {
            clear();
          } else {
            draw();
          }
          mode = !mode;
    }, 1000);

    makeLigthhouse()
}

lighthouse();