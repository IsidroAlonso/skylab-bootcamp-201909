const Results = require('../results')
const ResultItem = require('../result-item')
const Feedback = require('../feedback')
module.exports = function ({ logout, user, results, error, favPath, detailPath, goBack}) {

    const { name, surname, username } = user
    const onItemRenderer = duck => ResultItem({ item: duck, favPath, detailPath })

    return `<section class="view search _hide">
    <h1 class="search__title">Welcome ${name} <form metho="post" action="${logout}"><button class="search__logout">Logout</button></form></h1>
    <h2 class="search__user">This is your personal info: </h2>
    <form class="search__form">
        <span class="search__icon">Name: </span> <input class="search__criteria" type="text" name="name" value=${name} disabled>
        <span class="search__icon">Surname: </span> <input class="search__criteria" type="text" name="surname" value=${surname} disabled>
        <span class="search__icon">e-mail: </span> <input class="search__criteria" type="text" name="email" value=${username} disabled>
    </form>
    <a class="detail__back" href="${goBack}">Go back</a>
    <h2 class="search__user">Theese are your favorites: </h2>
        ${error ? Feedback({ message: error }) : ''}
        ${results ? Results({ items: results, onItemRender: onItemRenderer }) : ''}
</section>`

}
