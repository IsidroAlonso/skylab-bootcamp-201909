const Feedback = require('../feedback')

module.exports = function({ path, login, error }) {
    return `<section class="register">
    <p class="register__title">Join now:</p>
   
    <form class="register__form" method='post' action="${path}"}>
        <p class="register__form__p">Name:</p>
        <input type="text" name="name" id="name" placeholder="pepito"/>

        <p class="register__form__p">Last name:</p>
        <input type="text" name="lastName" id="lastName" placeholder="grillo"/>

        <p class="register__form__p">Mail:</p>
        <input type="email" name="mail" id="mail" placeholder="pepitogrillo@duck.com"/>

        <p class="register__form__p">Password:</p>
        <input type="password" name="password" id="password" placeholder="*****"/>

        <p class="register__form__p">Age:</p>
        <input type="number" name="age" id="age" placeholder="18"/>

        <a href="${login}" ><input type="button" class="register__form__login" value="Login" ></a>
        <button class="register__form__register">Register</button>
    </form>
    
    </section>
    ${error ? Feedback(error) : ''}

`
}