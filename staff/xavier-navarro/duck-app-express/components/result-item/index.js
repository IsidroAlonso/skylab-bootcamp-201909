module.exports = function ({ item: { id, title, image, price, isFav }, favPath, detailPath }) {
    return `<li class="results__item">
                <a href="${`${detailPath}/${id}`}" class="duck">
                    <h2 class="duck__title">${title}</h2>
                    <img class="duck__img" src=${image} />
                    <p class="duck__price"><span class="price-tag">${price}</span></p>
                    <span class="duck__fav">
                        <form method="post" action="${favPath}">
                            <input type="hidden" name="id" value="${id}">
                            <button type="submit">${isFav ? '🧡' : '💔'}</button>
                        </form>
                    </span>
                </a>
            </li>`
}