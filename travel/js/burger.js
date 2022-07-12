function burgerMenu() {

    const icon = document.querySelector(".nav-menu-btn");
    const menu = document.getElementById("btn-toggle");
    const navList = document.querySelector(".nav-list-mobile");
    const controls = document.querySelector(".burger-menu-controls-container");

    const toggleMenu = () => {
        menu.classList.toggle('show');
        icon.classList.toggle("change");
    };

    icon.addEventListener('click', toggleMenu);
    navList.addEventListener('click', toggleMenu);

    document.addEventListener('click', outsideEvtListener);

    function outsideEvtListener(event) {
        if (event.target === controls || controls.contains(event.target) || event.target === menu || menu.contains(event.target)) {
            return;
        }

        if (menu.classList.contains('show')) {
            toggleMenu();
        }

    }


}

export default burgerMenu;