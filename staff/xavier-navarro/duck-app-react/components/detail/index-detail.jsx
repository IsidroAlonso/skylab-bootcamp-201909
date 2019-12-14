
function Detail({ item: { title, imageUrl, description, price, link }, onBack }) {
    return <section className="details__container detail">
        <h2 className="details__title">{title}</h2>
        <img className="details__image" src={imageUrl} />
        <p className="details__description">{description}</p>
        <a className="details__store" href={link}>Go to store</a>
        <span className="details__price">{price}</span>
        <a className="details__back" href="" onClick={event => {
            event.preventDefault()

            onBack()
        }}>Go back</a>
    </section>
}