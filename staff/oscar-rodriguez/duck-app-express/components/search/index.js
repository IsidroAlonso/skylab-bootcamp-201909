const Results = require('../results')
const ResultItem = require('../result-item')
const Feedback = require ('../feedback')
module.exports = function ({logout, name, path, query, results, error, favPath, detailPath}) {

    return `<section class="view search _hide">
    <h1 class="search__title">Search</h1>
    <a href="/userpage"><h2 class="search__user">${name}</h2></a>
    <form metho="post" action="${logout}"><button class="search__logout">Logout</button></form>
    <form class="search__form" method="GET" action="${path}">
        <span class="search__icon">🐣</span>
        <input class="search__criteria" type="text" name="query" placeholder="criteria" ${query? `value=${query}` : ''}>
        <button class="search__submit">🔍</button>
    </form>
    ${error ? Feedback({ message: error }) : ''}
    ${results ? Results ({items: results, onItemRender: duck=>ResultItem({ item: duck, favPath, detailPath})}) : ''}
</section>`

}
