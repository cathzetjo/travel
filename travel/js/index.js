import burgerMenu from './burger.js';

burgerMenu();

window.addEventListener('resize', function () {
    activeSliderChange()
});

window.addEventListener('load', function () {
    activeSliderChange()
});

function activeSliderChange() {
    if (window.innerWidth <= 390) {
        let firstSlide = document.querySelector('.slider p:first-child');
        let middleSlide = document.querySelector('.slider p:nth-child(2)');
        firstSlide.classList.add('active');
        middleSlide.classList.remove('active')
    }
    if (window.innerWidth > 390) {
        let firstSlide = document.querySelector('.slider p:first-child');
        let middleSlide = document.querySelector('.slider p:nth-child(2)');
        middleSlide.classList.add('active');
        firstSlide.classList.remove('active')
    }
}

