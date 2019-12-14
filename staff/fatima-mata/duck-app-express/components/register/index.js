const Feedback = require('../feedback')

module.exports = function({ path, error }){
    return `<section class="view register">
    <form method="post" action="${path}">
        <h1 class="register__title">⭐️🐥⭐️DUCK APP⭐️🐥⭐️</h1>
        <h1 class="register__title">REGISTER</h1>
        <input class="register__field" type="text" name="name" placeholder="Name">
        <input class="register__field" type="text" name="surname" placeholder="Surname">
        <input class="register__field" type="email" name="email" placeholder="E-mail">
        <input class="register__field" type="password" name="password" placeholder="Password">
        <button class="register__submit">➡️</button>
    </form>

    ${error ? Feedback({ message: error }) : ''}
</section>`
}