const Feedback = require('../feedback')
const Results = require('../results')
const ResultItem = require('../result-item')
// const ResultItemDark = require('../result-item-dark')

module.exports = function ({ path, query, name, logout, error, results, favPath, favsPath, detailPath }) {
    return `<section class="view search">
   
    <h2 class="search__user">${name}</h2>
    <form method="post" action="${logout}">
    <button class="search__logout">Logout</button></form>
    <a href="${favsPath}" class="search__favs">Favourites</a>
    
    <form class="search__form" method="get" action="${path}">
        <span class="search__icon">🐣</span>
        <input class="search__criteria" type="text" name="q" placeholder="criteria" ${query ? `value=${query}` : ''}>
        <button class="search__submit">🔍</button>
    </form>

    ${error ? Feedback({ message: error }) : ''}

    ${results ? Results({ items: results, onItemRender: duck => 
    
    //si hay patitos de esa búsqueda, activa Results (que crea una ul)
    //y pinta las filas
    ResultItem({ item: duck, favPath, detailPath }) }) : ''}
</section>`
}