function mainMonigote(){
  const canvasMonigote = document.getElementById('MonigoteCanvas');
  const ctxMonigote = canvasMonigote.getContext('2d');
  let sonrisaVisible = true;
  var booleanAnim = true;


  function defaultCanvas() {

    // Sonrisa
    ctxMonigote.beginPath();
    ctxMonigote.arc(100, 32, 12, 0.2 * Math.PI, 0.8 * Math.PI);
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();

      
    // Barazos abajo
    ctxMonigote.beginPath();
    ctxMonigote.moveTo(100, 60);
    ctxMonigote.lineTo(70, 80); // Brazo izquierdo
    ctxMonigote.moveTo(100, 60);
    ctxMonigote.lineTo(130, 80); // Brazo derecho
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();

  }

  function gorra(){
    ctxMonigote.beginPath();
    ctxMonigote.arc(100,12,10, 0.99 * Math.PI, 0)
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();   

    ctxMonigote.beginPath();
    ctxMonigote.moveTo(80, 10);
    ctxMonigote.lineTo(100, 10);
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();   
  
  }

  function gafas(){
    ctxMonigote.beginPath();
    ctxMonigote.arc(110, 25, 5, 0, 2 * Math.PI);
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();

    ctxMonigote.beginPath();
    ctxMonigote.arc(90, 25, 5, 0, 2 * Math.PI);
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();

    ctxMonigote.beginPath();
    ctxMonigote.moveTo(105, 25);
    ctxMonigote.lineTo(95,25);
    ctxMonigote.stroke();
  }

  function dibujarCanvas() {
    ctxMonigote.clearRect(0, 0, canvasMonigote.width, canvasMonigote.height);

    // Cabeza
    ctxMonigote.beginPath();
    ctxMonigote.arc(100, 30, 20, 0, Math.PI * 2);
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();

    // Dibuja el cuerpo
    ctxMonigote.beginPath();
    ctxMonigote.moveTo(100, 50);
    ctxMonigote.lineTo(100, 100);
    ctxMonigote.strokeStyle = 'black';
    ctxMonigote.stroke();

      // Piernas
      ctxMonigote.beginPath();
      ctxMonigote.moveTo(100, 100);
      ctxMonigote.lineTo(70, 140); // Pierna izquierda
      ctxMonigote.moveTo(100, 100);
      ctxMonigote.lineTo(130, 140); // Pierna derecha
      ctxMonigote.strokeStyle = 'black';
      ctxMonigote.stroke();


      ctxMonigote.beginPath();
      ctxMonigote.arc(90, 25, 2, 0, Math.PI * 3); // Ojo izquierdo
      ctxMonigote.arc(110, 25, 2, 0, Math.PI *2); // Ojo derecho
      ctxMonigote.fillStyle = 'black';
      ctxMonigote.fill();

      gorra();
      gafas();

      if (sonrisaVisible) {
        defaultCanvas();
      }else{
        //Boca Roja
        ctxMonigote.beginPath();
        ctxMonigote.arc(100, 40, 5, 0, 2 * Math.PI);
        ctxMonigote.strokeStyle = 'black';
        ctxMonigote.fillStyle = 'red'
        ctxMonigote.fill();



        // Brazos arriba
        ctxMonigote.beginPath();
        ctxMonigote.moveTo(100, 60);
        ctxMonigote.lineTo(70, 40); // Brazo izquierdo
        ctxMonigote.moveTo(100, 60);
        ctxMonigote.lineTo(130, 40); // Brazo derecho
        ctxMonigote.strokeStyle = 'black';
        ctxMonigote.stroke();
      }
  }

  var interval = null;

  let ctrlKeyPressed = false; 

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Control') {
      ctrlKeyPressed = true;
    }

    if (event.key === 'c' && ctrlKeyPressed) {
      if (booleanAnim) {
        sonrisaVisible = !sonrisaVisible;
        dibujarCanvas();
        interval = 100;
        
        if (interval != null) {
          intervalo = setInterval(function () {
            sonrisaVisible = !sonrisaVisible;
            dibujarCanvas();
          }, interval);
        }
        
        booleanAnim = false;
      } else {
        clearInterval(intervalo);
        booleanAnim = true;
      }
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.key === 'Control') {
      ctrlKeyPressed = false;
    }
  });
  
  dibujarCanvas();
}

mainMonigote();


document.addEventListener('keydown', function (event) {
  let kbd = document.getElementById('kbd-light_1');
  let kbd2 = document.getElementById('kbd-light_2');
  let kbdText = document.getElementById('kbd-cont');

  if (event.key === 'Control') {
    ctrlKeyPressed = true;
  }

  if (event.key === 'c' && ctrlKeyPressed) {
    kbd.style.borderColor = '#454343 #454343 #454343 #454343';
    kbd.style.backgroundColor = '#2b2b2b';

    kbd2.style.borderColor = '#454343 #454343 #454343 #454343';
    kbd2.style.backgroundColor = '#2b2b2b';

    //kbdText.innerHTML = 'Acabar Animacion'
  } 
})

document.addEventListener('keyup', function (event) {
  if (event.key === 'Control') {
    ctrlKeyPressed = false;

    let kbd = document.getElementById('kbd-light_1');
    let kbd2 = document.getElementById('kbd-light_2');
    let kbdText = document.getElementById('kbd-cont');

    kbd.style.borderColor = '#e6e6e6 #bebebe #bebebe #e6e6e6';
    kbd.style.backgroundColor = '#d2d2d2';

    kbd2.style.borderColor = '#e6e6e6 #bebebe #bebebe #e6e6e6';
    kbd2.style.backgroundColor = '#d2d2d2';

    //kbdText.innerHTML = 'Empezar Animacion'

  }
});