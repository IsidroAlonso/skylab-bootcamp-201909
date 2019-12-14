module.exports = function ({register, login}) {
    return `<section class="landing">
                <h1 class="landing__title">Welcome to Duck App 🐥</h1>
                <p class="landing__options">Please, proceed to <a href="${register}">Register</a> or <a href="${login}">Login</a>.</p>
            </section>`
}