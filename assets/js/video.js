// Controlador de videos

document.addEventListener('DOMContentLoaded', function () {
    var player = document.getElementById('player');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var controlsButton = document.getElementById('controlsButton');
    var volumeControl = document.getElementById('volumeControl');

    playPauseBtn.addEventListener('click', function () {
        if (player.paused) {
            player.play();
            playPauseBtn.innerText = 'Pause';
        } else {
            player.pause();
            playPauseBtn.innerText = 'Play';
        }
    });

    volumeControl.addEventListener('input', function () {
        player.volume = volumeControl.value;
    });

    controlsButton.addEventListener('click', function () {
        if(controlsButton.innerHTML == 'Enable HTML Controls'){
            player.controls = true;
            controlsButton.innerHTML = 'Disabled HTML Controls'
        }else{
            player.controls = false;
            controlsButton.innerHTML = 'Enable HTML Controls'
        }
    });

    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    prev.addEventListener('click',() => {
        changeSlide(-1)
    })

    next.addEventListener('click',() => {
        changeSlide(1)
    })

    let currentSlide = 1;

    function showSlide(n) {
        const slides = document.querySelectorAll('.slideMediaItem');
        if (n > slides.length) {
            currentSlide = 1;
        }
        if (n < 1) {
            currentSlide = slides.length;
        }
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide - 1].classList.add('active');
    }

    function changeSlide(n) {
        showSlide(currentSlide += n);
    }
    showSlide(currentSlide);

});
