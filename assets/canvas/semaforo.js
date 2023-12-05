const SemaforoCanvasContainer = document.getElementById('SemaforoCanvasContainer');

function mainSemaforo(){

    
    let ctxSemafor;
    let contSemaforo = 0;
    let contSwitcher = 0;
    let switcher = false;

    const standButton = document.getElementById('standButtonSemaforo');
    var canvasSemaforo = document.getElementById('SemaforoCanvas');
    if (canvasSemaforo && canvasSemaforo.getContext) {
        ctxSemafor = canvasSemaforo.getContext('2d');
    }



    function trafficLight(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = 'black';

        ctxSemafor.beginPath()
        ctxSemafor.moveTo(300,300)
        ctxSemafor.lineTo(300,600)
        ctxSemafor.lineTo(450,600)
        ctxSemafor.lineTo(450,300)
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    function post(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = 'black';
        ctxSemafor.beginPath();
        ctxSemafor.moveTo(350,600);
        ctxSemafor.lineTo(350,800);
        ctxSemafor.lineTo(400,800);
        ctxSemafor.lineTo(400,600);
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    function greenLight(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = '#5ff20a';
        ctxSemafor.beginPath();
        ctxSemafor.arc(375, 530, 35, 0, 2 * Math.PI);
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    function yellowLight(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = 'yellow';
        ctxSemafor.beginPath();
        ctxSemafor.arc(375, 450, 35, 0, 2 * Math.PI);
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    function redLight(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = 'red';
        ctxSemafor.beginPath();
        ctxSemafor.arc(375, 370, 35, 0, 2 * Math.PI);
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    function BackgreenLight(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = 'green';
        ctxSemafor.beginPath();
        ctxSemafor.arc(375, 530, 35, 0, 2 * Math.PI);
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    function BackyellowLight(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = '#a3a811';
        ctxSemafor.beginPath();
        ctxSemafor.arc(375, 450, 35, 0, 2 * Math.PI);
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    function BackredLight(){
        ctxSemafor.strokeStyle = '#808080';
        ctxSemafor.fillStyle = '#bd2f04';
        ctxSemafor.beginPath();
        ctxSemafor.arc(375, 370, 35, 0, 2 * Math.PI);
        ctxSemafor.stroke() 
        ctxSemafor.fill()
        ctxSemafor.closePath();
    }

    trafficLight()
    post()


    setInterval(function(){

        if(switcher){

            let contSwitcher = 0; // Inicializa el contador

            let yellowInter = setInterval(function() {
                ctxSemafor.clearRect(0, 0, canvasSemaforo.width, canvasSemaforo.height);
                console.log('First' + contSwitcher);
                
                if (contSwitcher === 0) {
                    trafficLight();
                    BackgreenLight();
                    BackredLight();
                    post();

                    yellowLight();
                    contSwitcher = 1;
                } else if (contSwitcher === 1) {
                    ctxSemafor.clearRect(0, 0, canvasSemaforo.width, canvasSemaforo.height);
                    trafficLight();
                    BackgreenLight();
                    BackredLight();
                    post();

                    BackyellowLight();
                    contSwitcher = 0;
                }

                console.log(contSwitcher);
            }, 3000);
            
        }else{
            contSemaforo++;
            if(contSemaforo == 0){
                ctxSemafor.clearRect(0, 0, canvasSemaforo.width, canvasSemaforo.height);
                trafficLight()
                post()
                greenLight()
                BackyellowLight()
                BackredLight()
                
            }
            if(contSemaforo == 1){
                ctxSemafor.clearRect(0, 0, canvasSemaforo.width, canvasSemaforo.height);
                trafficLight()
                post()
                redLight()
                BackgreenLight()
                BackyellowLight()
            
    
            }
            if(contSemaforo == 2){
                ctxSemafor.clearRect(0, 0, canvasSemaforo.width, canvasSemaforo.height);
                trafficLight()
                post()
                yellowLight()
                BackgreenLight()
                BackredLight()
            }
            if(contSemaforo == 2){
                contSemaforo=-1;
            }
        }

        
    },1000);

    standButton.addEventListener('click',() => {
        if(switcher){
            switcher = false;
            SemaforoCanvas.style.filter = 'blur(0px)';
            standButton.innerHTML = 'Pausar Juego';
            appendPlaySemaforo()
            
        }else{
            switcher =  true;
            
            SemaforoCanvas.style.filter = 'blur(5px)';
            standButton.innerHTML = 'Renaudar Juego';
            appendPauseSemaforo();
 
        }
    })
}

mainSemaforo();

function appendPauseSemaforo(){
    let PauseText = document.createElement('div')
    PauseText.className = 'pause-text'
    PauseText.id = 'pauseSemaforo';
    PauseText.innerHTML='Game Paused'
    PauseText.style.left = SemaforoCanvasContainer.offsetLeft+450 + 'px';
    PauseText.style.top = SemaforoCanvasContainer.offsetTop+380 + 'px';
    SemaforoCanvasContainer.appendChild(PauseText);
}

function appendPlaySemaforo(){
    let PlayText = document.getElementById('pauseSemaforo')
    if(PlayText){PlayText.remove()}
}
