const access__login = document.getElementsByClassName('access__login')[0];

access__login.addEventListener('click', (event) => {
    event.preventDefault();

    const access__email = document.getElementsByClassName('access__email')[0];
    const access__password = document.getElementsByClassName('access__password')[0];

    const regexEmail = /.@.\../;
    const regexEmailResult = regexEmail.test(access__email.value);

    const regexPw = /.{5,}/;
    const regexPwResult = regexPw.test(access__password.value);

    if (!regexEmailResult || !regexPwResult) {
        const feedback = document.getElementsByClassName('feedback')[0];
        const feedback__message = document.getElementsByClassName('feedback__message')[0];

        feedback.classList.remove('hide');
        feedback__message.innerHTML = 'You cannot access with these credentials';

        access__email.value = '';
        access__password.value = '';
    }
    else {
        event.preventDefault();

        authenticateUser(access__email.value, access__password.value,
            function (undefined, data) {
                if (!data) {
                    const feedback = document.getElementsByClassName('feedback')[0];
                    const feedback__message = document.getElementsByClassName('feedback__message')[0];

                    feedback.classList.remove('hide');
                    feedback__message.innerHTML = 'You cannot access with these credentials';

                    access__email.value = '';
                    access__password.value = '';
                }
                else {
                    const access = document.getElementsByClassName('access')[0];
                    const search = document.getElementsByClassName('search')[0];
                    const results = document.getElementsByClassName('results')[0];
                    const feedback = document.getElementsByClassName('feedback')[0];

                    access.classList.add('hide');
                    search.classList.remove('hide');
                    results.classList.remove('hide');
                    feedback.classList.add('hide')
                }
            }
        );
    }
})

const access__link = document.getElementsByClassName('access__link')[0];

access__link.addEventListener('click', () => {
    const access = document.getElementsByClassName('access')[0];
    const register = document.getElementsByClassName('register')[0];

    access.classList.add('hide');
    register.classList.remove('hide');
})