const Feedback = require('../feedback')

module.exports = function ({ path, error }) {
    return `<section class="view register">
                <form method="POST" action="/register" class="register__form">
                    <h1 class="register__title">Register</h1>
                    <input class="register__input" type="text" name="name" placeholder="name" />
                    <input class="register__input" type="text" name="surname" placeholder="surname" />
                    <input class="register__input" type="email" name="email" placeholder="e-mail" />
                    <input class="register__input" type="password" name="password" placeholder="password" />
                    <button type="login__submit">Entrar</button>
                    <a href="${path}" class="btn__register">DuckIN</a>
                </form>
                ${error ? Feedback({ message: error }) : ''}
            </section>`
}