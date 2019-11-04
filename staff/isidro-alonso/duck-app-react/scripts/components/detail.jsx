function Detail ({ item: { title, imageUrl, description, price, link, onFav }, goBackToResults, isFav}) {
    return <section className="view detail">
        <h2 className="detail__title">{title}</h2>
        <img className="detail__image" src={imageUrl} />
        <p className="detail__description">{description}</p>
        <a className="detail__store" href={link} >Go to store</a>
        <span className="detail__price">{price}</span>
        <span className="item__fav" onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                onFav(id)
            }}>{isFav? '❤' : '💔'}</span>
        <a className="detail__back" href="" onClick={e => {
            e.preventDefault()
            goBackToResults()
        }}>Go back</a>
    </section>
}