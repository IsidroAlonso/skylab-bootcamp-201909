const Feedback = require('../feedback')

module.exports = function({ name, path }) {
    return `<section class="view search">
        <h1 class="search__title">Search</h1>
        <h2 class="search__user">Hola, ${name}</h2>
        <button class="search__logout">Logout</button>
        <form class="search__form" method= "GET" action="${path}">
            <span class="search__icon">🐣</span>
            <input class="search__criteria" type="text" name="query" placeholder="criteria" defaultValue={query} />
            <button class="search__submit">🔍</button>
        </form>
        ${Feedback()}
    </section>`
}