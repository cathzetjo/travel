function carousel() {

    if (document.documentElement.clientWidth > 390) {
        const pictures = document.querySelectorAll(".destinations-picture");
        const picturesContainer = document.querySelector(".destinations-items");
        const sliderItems = document.querySelectorAll(".slider-item");
        picturesContainer.onclick = function (event) {

            function slider(pic1, pic2, pic3, slider1, slider2, slider3) {
                pic1.style.order = "2";
                pic1.style.flexShrink = "0";
                pic1.children[0].style.display = 'block';
                pic1.style.cursor = "auto";
                slider1.classList.add("active");
                pic2.style.order = "3";
                pic2.style.flexShrink = "unset";
                pic2.style.cursor = "pointer";
                pic2.children[0].style.display = 'block';
                slider2.classList.remove("active");
                pic3.style.order = "1";
                pic3.style.flexShrink = "unset";
                pic3.children[0].style.display = 'none';
                pic3.style.backgroundPositionX = "right";
                pic3.style.cursor = "pointer";
                slider3.classList.remove("active");

                    if (document.documentElement.clientWidth < 1301) {
                        pic1.style.flexShrink = "0";
                        pic2.style.flexShrink = "0";
                        pic3.style.flexShrink = "0";
                    }
            }

            if (event.target === pictures[0]) {
                slider(pictures[0], pictures[1], pictures[2], sliderItems[0], sliderItems[1], sliderItems[2]);

            } else if (event.target === pictures[1]) {
                slider(pictures[1], pictures[2], pictures[0], sliderItems[1], sliderItems[2], sliderItems[0]);

            } else if (event.target === pictures[2]) {
                slider(pictures[2], pictures[0], pictures[1], sliderItems[2], sliderItems[0], sliderItems[1]);
            }
        }
    }

}

export default carousel;