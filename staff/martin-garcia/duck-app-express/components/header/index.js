const LogBar = require('../log-bar')

module.exports = function({ logBar }) {
    return `<header class="header">
    <img class="header__logo" src="/images/rubber-duck.svg" alt="Duck logo"/>
    <h1>Duck-App</h1>
    ${logBar ? LogBar(logBar) : ''}
</header> 
`
}