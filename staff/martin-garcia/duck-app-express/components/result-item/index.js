module.exports = function({ item: { id, title, imageUrl, price, isFav }, favPath, detailPath }) {
        return `
    <article class="main__article">
        <a class="item" href=${`${detailPath}/${id}`}>
            <p class="article__title">${title}</p>
            <img class="article__image" src='${imageUrl}' />
            <div class="article__details">
                <p class="article__details__price">${price}</p>

                <form method='post' action='${favPath}'>
                    <input type='hidden' name='id' value='${id}'/>
                    <button class='button-without-style'><img class="article__details__fav" src=${isFav==="true" ? '/images/fav.png' : '/images/notFav.png'}  alt="id favourite?" /> <?button>                
                </form>
            </div>
        </a>
    </article>
            `
}