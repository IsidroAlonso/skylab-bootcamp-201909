const Results = require('../results')
const ResultItem = require('../result-item')
const Feedback = require('../feedback')

module.exports = function({ path, query, results, error, favPath, detailPath }) {
        return `<section class="search">
    <nav class="search__nav nav">
        <form class="myForm" method='get' action="${path}">
            <input class="myForm__search" type="search" name="q" placeholder="Are you looking for a special Duck?"  ${query? `value=${query}` : ''}/> 
            <button> 
                <i class="fas fa-search myForm__button" id="searchButton" aria-hidden="true"></i>
            </button>
        </form>
    </nav>
   ${results ? Results({items:results, onItemRender: duck=> ResultItem({item:duck, favPath, detailPath})}):''}
   ${error ? Feedback(error):'' }
</section>
`
        

}