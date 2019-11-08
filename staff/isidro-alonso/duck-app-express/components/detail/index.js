module.exports = function ({ item: { title, image, description, price, link } }) {
    return `<section className="view detail _hide">
        <h2 className="detail__title">~${title}</h2>
        <img className="detail__image" src=${image} />
        <p className="detail__description">${description}</p>
        <a className="detail__store" href=${link}>Go to store</a>
        <span className="detail__price">${price}</span>
        <a className="detail__back" href="">Go back</a>
    </section>`
}