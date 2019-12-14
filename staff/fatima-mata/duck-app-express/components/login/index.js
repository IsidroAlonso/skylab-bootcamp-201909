const Feedback = require('../feedback')

module.exports = function({ path, error }) {
    return `<section class="view login">
        <form class="login__form" method="post" action="${path}"> 
            <h1 class="login__title">⭐️🐥⭐️DUCK APP⭐️🐥⭐️</h1>  
            <h1 class="login__title">LOGIN</h1>             
            <input type="text" name="email" placeholder="Email" class="login__input" required/>
            <input type="password" name="password" placeholder="Password" class="login__input" required/>
            <button class="login__button">➡️</button>        
         </form>

    ${error ? Feedback({ message: error}) : ''}
    </section>`
}



