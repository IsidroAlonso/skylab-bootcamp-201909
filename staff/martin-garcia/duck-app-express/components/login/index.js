const Feedback = require('../feedback')

module.exports = function({ path, register, error }) {
    return ` <section class="login">
    <p class="login__title">Please log in:</p>
    <nav class="login__nav">
        <form class="login__form" method='post' action="${path}">
            <input type="text" name="mail" id="mail" placeholder="pepitogrillo@duck.com"/>
            <input type="password" name="password" id="password"/>
            <a href="${register}"><input type="button" class="login__form__register" value="Register" /></a>
            <button class="login__form__button"> Login</button>
        </form>
    </nav>
    ${error ? Feedback(error) : ''}
</section>`
}