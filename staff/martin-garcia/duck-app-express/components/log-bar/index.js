module.exports = function({ path, userName }) {
    return `<section class="header__log log-bar ">
    <p class="log-bar__user">${userName}</p>
    <form method='post' action='${path}'>
    <button class="log-bar__button"> Sign out </button>
    </form>
    <a class='log-bar__favourites' href='/favourites' >Favourite Ducks </a>
</section>`
}