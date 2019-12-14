module.exports = function ({ duck, goBack, favPath }) {
    const { id, title, imageUrl, description, link, price, isFav } = duck
    return `<section class="view detail _hide">
                <h2 class="detail__title">${title}</h2>
                <img class="detail__image" src="${imageUrl}">
                <p class="detail__description">${description}</p>
                <a class="detail__store" href="${link}">Go to store</a>
                <span class="detail__price">${price}</span>
                <span class="detail__fav">
                    <form method="post" action="${favPath}">
                        <input type="hidden" name="id" value="${id}">
                        <button type="submit">${isFav ? '🧡' : '💔'}</button>
                    </form>
                </span>
                <a class="detail__back" href="${goBack}">Go back</a>
            </section>`
}