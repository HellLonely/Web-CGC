var ctxTank;
let xTank = 260;
let yTank = 260;
var angleTank = 0;
let shot = true;


function mainTank(){
    var canvasTank = document.getElementById('TankCanvas');
    if (canvasTank && canvasTank.getContext) {
        ctxTank = canvasTank.getContext('2d');
    }


    function makeTank(xTank,yTank,angle){
        wheel1();
        wheel2();
        bodyTank();
        canonBlast2(xTank,yTank,75,angle);
        turretComponent();
        
    }

    function wheel1(){
        ctxTank.strokeStyle='black';
        ctxTank.fillStyle='green';
        
        ctxTank.beginPath();
        ctxTank.moveTo(200, 200);
        ctxTank.lineTo(300, 200);
        ctxTank.lineTo(300, 225);
        ctxTank.lineTo(200, 225);
        ctxTank.stroke()
        ctxTank.fill();
        ctxTank.closePath();
    }

    function wheel2(){
        ctxTank.strokeStyle='black';
        ctxTank.fillStyle='green';
        
        ctxTank.beginPath();
        ctxTank.moveTo(200, 300);
        ctxTank.lineTo(300, 300);
        ctxTank.lineTo(300, 325);
        ctxTank.lineTo(200, 325);
        ctxTank.stroke()
        ctxTank.fill();
        ctxTank.closePath();
    }

    function bodyTank(){
        ctxTank.strokeStyle='black';
        ctxTank.fillStyle='#184217';
        
        ctxTank.beginPath();
        ctxTank.moveTo(285, 225);
        ctxTank.lineTo(285,300)
        ctxTank.lineTo(225,300)
        ctxTank.lineTo(225,225)
        ctxTank.stroke()
        ctxTank.fill();
        ctxTank.closePath();
    }

    function turretComponent(){
        ctxTank.strokeStyle='black';
        ctxTank.fillStyle='#184217';
        
        ctxTank.beginPath();
        ctxTank.arc(255, 260, 20, 0, 2 * Math.PI);
        ctxTank.stroke()
        ctxTank.fill();
        ctxTank.closePath();
    
    }

    function canonBlast(angle){
        ctxTank.strokeStyle='black';
        ctxTank.fillStyle='#184217';
        
        ctxTank.beginPath();
        ctxTank.moveTo(250, 255);
        ctxTank.lineTo(250,265);
        ctxTank.lineTo(340,265); //
        ctxTank.lineTo(340,255); //
        ctxTank.lineTo(250, 255);
        ctxTank.rotate()
        ctxTank.stroke();
        ctxTank.fill();
        ctxTank.closePath()
    }

    function canonBlast2 (xTank,yTank, longitud,angle) {
        ctxTank.strokeStyle='black';
        ctxTank.fillStyle='#184217';
        ctxTank.lineWidth=2;
        
      
        ctxTank.beginPath()
        ctxTank.moveTo(xTank,yTank)
        ctxTank.lineTo(xTank + (Math.cos(angle) * longitud), yTank + (Math.sin(angle) * longitud) )
        ctxTank.stroke()
        ctxTank.closePath()
    }
  
    
    makeTank(xTank,yTank,angleTank)

    document.addEventListener('keydown', function(e){
        if (e.key == 'ArrowUp'){
            ctxTank.clearRect(0, 0, 800, 800);
            console.log(angleTank);
            angleTank-=0.05;
            makeTank(xTank,yTank,angleTank)

            pressButtonEffect(document.getElementById('kbd-light_3'))
        }
    });

    document.addEventListener('keydown', function(e){
        if (e.key == 'ArrowDown'){
            ctxTank.clearRect(0, 0, 800, 800);
            angleTank+=0.05;
            console.log(angleTank);
            makeTank(xTank,yTank,angleTank)

            pressButtonEffect(document.getElementById('kbd-light_4'))
        }
    });

    function proyectile(xTank, yTank, longitud, angle) {
        const speed = 2; // Velocidad del proyectil
        var proX = xTank + (Math.cos(angle) * longitud)+ longitud;
        var proY = yTank + (Math.sin(angle) * longitud);
    
        // Dibuja el proyectil como un círculo
        ctxTank.strokeStyle = 'black';
        ctxTank.fillStyle = 'red';
        ctxTank.beginPath();
        ctxTank.arc(proX, proY, 5, 0, 2 * Math.PI);
        ctxTank.stroke();
        ctxTank.fill();
        ctxTank.closePath();
    
        let vx = Math.cos(angle) * speed;
        let vy = Math.sin(angle) * speed;
    
        // Actualiza la posición del proyectil en cada fotograma
        function moveProyectile() {
            proX += vx;
            proY += vy;
    
            // Dibuja el proyectil en su nueva posición
            ctxTank.clearRect(0, 0, 800, 800);
            makeTank(xTank, yTank, angle);
            ctxTank.strokeStyle = 'black';
            ctxTank.fillStyle = 'red';
            ctxTank.beginPath();
            ctxTank.arc(proX, proY, 5, 0, 2 * Math.PI);
            ctxTank.stroke();
            ctxTank.fill();
            ctxTank.closePath();
    
            // Verifica si el proyectil está dentro del área deseada o colisiona con algo
            if (proX >= 0 && proX <= 800 && proY >= 0 && proY <= 800) {
                requestAnimationFrame(moveProyectile);
                
            }else{
                shot = true;
            }
        }
    
        if(shot){
            moveProyectile();
            shot = false;
        }
    }
    
    document.addEventListener('keydown', function (e) {
        if (e.key == 'ArrowLeft') {
            proyectile(xTank, yTank, 30, angleTank); 

            pressButtonEffect(document.getElementById('kbd-light_6'))
        }
    });
    
   
    document.addEventListener('keydown', function(e){
        if (e.key == 'Space'){
            console.log('Boooming')
        }
    });
}

mainTank()

let cKeyPressed = false;
let scrollDisabled = false;
let kbd3Switch = false;

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    cKeyPressed = true;
    scrollDisabled = !scrollDisabled;

    document.body.style.overflow = scrollDisabled ? 'hidden' : 'auto'; // Deshabilita el evento Scroll para que al mover la flechas no se mueva la pantalla.

    pressButtonEffect(document.getElementById('kbd-light_5'))

    // Controla el evento de la notificacion, alojado en ../js/deco.js

    if(kbd3Switch == false || document.getElementById('notification')) {
        appendNotificationCard();
    }

    kbd3Switch = !kbd3Switch;
  }
});

document.addEventListener('keyup', function (event) {
  if (event.key === 'c') {
    cKeyPressed = false;
  }
});
