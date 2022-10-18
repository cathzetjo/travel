import carouselDesktop from './carousel-desktop.js';
import burgerMenu from './burger.js';
import carouselMobile from './carousel-mobile.js';
import singIn from './singin.js';

carouselDesktop();
burgerMenu();
carouselMobile();
singIn();

window.addEventListener('resize', function () {
    sliderSwitch()
});

window.addEventListener('load', function () {
    sliderSwitch();
});

function sliderSwitch() {

    const sliderItems = document.querySelectorAll(".slider-item");

    if (window.innerWidth < 391) {
        sliderItems[0].classList.add('active');
        sliderItems[1].classList.remove('active');
        sliderItems[2].classList.remove('active');
        carouselMobile();
    }
    if (window.innerWidth > 390) {
        sliderItems[1].classList.add('active');
        sliderItems[0].classList.remove('active');
        sliderItems[2].classList.remove('active');
        carouselDesktop();
    }
}

