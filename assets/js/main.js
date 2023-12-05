


// Set Default config for nff Elements

const nffElements = document.querySelectorAll('nff-element');

nffElements.forEach(enffElement => {
    enffElement.innerHTML = "No Avaliable Element";
    enffElement.font = '10px';
    enffElement.color = 'black';
    enffElement.backgroundColor = 'var(--testing-4)';
});

// Load Assets via XHR

function loadAssetsElement(htmlAsset, targetElement,className) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', htmlAsset, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(targetElement).innerHTML = xhr.responseText;
            document.getElementById(targetElement).classList.add(className);
        }
    };
    xhr.send();
}


loadAssetsElement('./Web-CGC/templates/footer.html','footerAsset','footer-js')
loadAssetsElement('../../templates/navbar.html','navAsset')
loadAssetsElement('../../templates/header.html','headerAsset')



//Slider components JS

const prevSlideButton = document.getElementById('prevSlide');
const nextSlideButton = document.getElementById('nextSlide');

/** 
 * Upgrade: 
 * Use node.js project to upload images from img folder.
*/

const images = [
    '../assets/img/game1.png',
    '../assets/img/game2.png',
    '../assets/img/game3.png',
    '../assets/img/game4.png',
    '../assets/img/game6.png',
    '../assets/img/game7.png',
];

const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');

images.forEach(image => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${image}" alt="Slide">`;
    slider.appendChild(slide);
});

let currentIndex = 0;

prevSlideButton.addEventListener('click',() => {
    prevSlide()
})

nextSlideButton.addEventListener('click',() => {
    nextSlide()
})

// Autodesplazamiento del slider

setInterval(() => {
    nextSlide();
},5000)


function updateSlider() {
    const newPosition = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}
