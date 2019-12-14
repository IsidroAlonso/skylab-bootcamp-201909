module.exports = function({register, login}) {
    return `<section class="view landing">
    <h1 class="landing__title">Coders Lucky Duck Web</h1>
    <p class="landing__options">Please, proceed to <a href="${register}">Register</a> or <a href="${login}">Login</a>.</p>
</section>`
}