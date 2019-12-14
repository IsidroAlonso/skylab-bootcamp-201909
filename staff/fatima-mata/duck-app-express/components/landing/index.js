module.exports = function({ register, login }) {
    return `<section class="view landing">
    <h1 class="header__title">⭐️🐥⭐️WELCOME DUCK APP⭐️🐥⭐️</h1>
    <p class="landing__options">Please, proceed to <a href="${register}">REGISTER</a> or <a href="${login}">LOGIN</a>.</p>
</section>`
}