const register__sign = document.getElementsByClassName('register__sign')[0];

register__sign.addEventListener('click', (event) => {
    event.preventDefault();

    const register__email = document.getElementsByClassName('register__email')[0];
    const register__password = document.getElementsByClassName('register__password')[0];

    const regexEmail = /.@.\../;
    const regexEmailResult = regexEmail.test(register__email.value);

    const regexPw = /.{5,}/;
    const regexPwResult = regexPw.test(register__password.value);

    if (!regexEmailResult || !regexPwResult) {
        const feedback = document.getElementsByClassName('feedback')[0];
        const feedback__message = document.getElementsByClassName('feedback__message')[0];

        feedback.classList.remove('hide');
        feedback__message.innerHTML = 'You cannot register with these credentials';

        register__email.value = '';
        register__password.value = '';
    }
    else {
        event.preventDefault();

        registerUser(register__email.value, register__password.value);

        const register = document.getElementsByClassName('register')[0];
        const search = document.getElementsByClassName('search')[0];
        const results = document.getElementsByClassName('results')[0];
        const feedback = document.getElementsByClassName('feedback')[0];

        register.classList.add('hide');
        search.classList.remove('hide');
        results.classList.remove('hide');
        feedback.classList.add('hide');
    };
});

const register__link = document.getElementsByClassName('register__link')[0];

register__link.addEventListener('click', () => {
    const register = document.getElementsByClassName('register')[0];
    const access = document.getElementsByClassName('access')[0];

    register.classList.add('hide');
    access.classList.remove('hide');
})