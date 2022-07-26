function carouselMobile() {

    if (document.documentElement.clientWidth < 391) {
        const pictures = document.querySelectorAll(".destinations-picture");
        const sliderItems = document.querySelectorAll(".slider-item");

        const arrowLeft = document.querySelector(".arrow-left");
        const arrowRight = document.querySelector(".arrow-right");

        function sliderMobileLeft(pic1, pic2, pic3, slider1, slider2, slider3) {
            pic1.style.display = "none";
            slider1.classList.remove("active");
            pic2.style.display = "block";
            slider2.classList.add("active");
            pic3.style.display = "none";
            slider3.classList.remove("active");
        }

        arrowLeft.onclick = function () {

            if (window.getComputedStyle(pictures[0]).display === "block") {
                sliderMobileLeft(pictures[0], pictures[2], pictures[1], sliderItems[0], sliderItems[2], sliderItems[1]);

            } else if (window.getComputedStyle(pictures[1]).display === "block") {
                sliderMobileLeft(pictures[1], pictures[0], pictures[1], sliderItems[1], sliderItems[0], sliderItems[1]);

            } else if (window.getComputedStyle(pictures[2]).display === "block") {
                sliderMobileLeft(pictures[2], pictures[1], pictures[0], sliderItems[2], sliderItems[1], sliderItems[0]);
            }
        };

        arrowRight.onclick = function () {

            if (window.getComputedStyle(pictures[0]).display === "block") {
                sliderMobileLeft(pictures[0], pictures[1], pictures[2], sliderItems[0], sliderItems[1], sliderItems[2]);

            } else if (window.getComputedStyle(pictures[1]).display === "block") {
                sliderMobileLeft(pictures[1], pictures[2], pictures[0], sliderItems[1], sliderItems[2], sliderItems[0]);

            } else if (window.getComputedStyle(pictures[2]).display === "block") {
                sliderMobileLeft(pictures[2], pictures[0], pictures[1], sliderItems[2], sliderItems[0], sliderItems[1]);
            }
        }
    }
}

export default carouselMobile;