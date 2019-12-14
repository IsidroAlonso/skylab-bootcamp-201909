const Feedback = require('../feedback')
const Results = require('../results')
const ResultItem = require('../result-item')

module.exports = function ({ path, query, name, logout, error, results, favListPath, favPath, detailPath }) {
    return `<header class="header__container header">
                <div class="header__logo">
                    <img class="image" src="https://amsterdamduckstore.com/wp-content/uploads/2018/01/Sneowboard-rubber-duck-Amsterdam-Duck-Store.jpg" alt="DUCKGO"/>
                </div>
                <div class="header__company-name">
                    <h1 class="title">*DUCKSTAR*</h1>
                </div>
                <div class="header__home">
                    <p>${name}</p>
                    <p><a href="${favListPath}">My favorites</a></p>
                </div>
                <div class="header__search search">
                    <form method="get" action="${path}" id="duck-search" class="search__form">
                        <input type="search" class="search__input" name="q" placeholder="Search" ${query? `value=${query}` : '' }>
                    </form>
                </div>
                ${error ? Feedback({ message: error }) : ''}
            </header>
            ${results ? Results({ items: results, onItemRender: duck => ResultItem({ item: duck, favPath, detailPath }) }) : ''}
            `
}