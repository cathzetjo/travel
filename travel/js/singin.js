function singIn() {
    const btnLogin = document.querySelector(".btn-login");
    const menu = document.getElementById("login-menu");
    const btnMobile = document.querySelector(".nav-link-mobile-account");

    function addListenerToOpenModal(element) {
        element.addEventListener('click', function () {
            menu.classList.add('show');
            setTimeout(() => {closeModalLogin()},500)
        });
    }

    addListenerToOpenModal(btnLogin);
    addListenerToOpenModal(btnMobile);

    function closeModalLogin() {

        document.addEventListener('click', outsideEvtListener);

        function outsideEvtListener(event) {
            if (event.target === menu || menu.contains(event.target)|| event.target === btnLogin) {
                return;
            }

            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
            document.removeEventListener("click", outsideEvtListener);
        }
    }

    function showAlert() {
        const emailInput = document.querySelector("input[type='email']");
        const passwordInput = document.querySelector("input[type='text']");
        alert(`Please check your data:\n E-mail: ${emailInput.value}\n Password: ${passwordInput.value}`);
    }

    document.querySelector(".login-btn-sign").addEventListener('click', showAlert);

    const registerBtn = document.querySelector(".register-btn-modal");
    const loginBtn = document.querySelector(".login-btn-modal");

    const loginTitle = document.querySelector(".login-title");
    const activeAccount = document.querySelector(".login-active-account");
    const passwordForgot = document.querySelector(".password-forgot");
    const loginBtnSign = document.querySelector(".login-btn-sign");
    const haveAcc = document.querySelector(".dont-have-acc");

    registerBtn.addEventListener('click', function () {
        activeAccount.style.display = 'none';
        passwordForgot.style.display = 'none';
        loginTitle.innerHTML = 'Create account';
        loginBtnSign.innerHTML = 'Sing Up';
        haveAcc.innerHTML = 'Already have an account ?';
        loginBtn.style.display = "block";
        registerBtn.style.display = "none";
    });

    loginBtn.addEventListener('click', function () {
        activeAccount.style.display = 'block';
        passwordForgot.style.display = 'block';
        loginTitle.innerHTML = 'Log in to your account';
        loginBtnSign.innerHTML = 'Sign In';
        haveAcc.innerHTML = 'Don’t have an account ?';
        loginBtn.style.display = "none";
        registerBtn.style.display = "block";
    });

}

export default singIn;