const Feedback = require('../feedback')

module.exports = function ({register, error}) {
    return `<section class="view login">
                <form method="POST" action="/login" class="login__form">
                    <h1 class="login__title">DuckIn</h1>
                    <input type="text" placeholder="Username" class="login__input" name="email"/>
                    <input type="password" placeholder="Password" class="login__input" name="password"/>
                    <button class="login__submit" type="submit">Entrar</button>
                    <a href="${register}" class="btn__register">Create new account</a>
                </form>
                ${error ? Feedback({ message: error }) : ''}
            </section>`
}