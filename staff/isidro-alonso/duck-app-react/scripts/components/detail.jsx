function Detail ({ item: { title, imageUrl, description, price, link }, goBackToResults}) {
    return <section className="detail">
        <h2 className="detail__title">{title}</h2>
        <img className="detail__image" src={imageUrl} />
        <p className="detail__description">{description}</p>
        <a className="detail__store" href={link} >Go to store</a>
        <span className="detail__price">{price}</span>
        <a className="detail__back" href="" onClick={e => {
            e.preventDefault()
            goBackToResults()
        }}>Go back</a>
    </section>
}