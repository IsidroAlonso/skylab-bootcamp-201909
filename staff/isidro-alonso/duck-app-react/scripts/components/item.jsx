function ResultItem({ item: { id, title, image, price }, onClick, onFav }) {
    return <li className="results__item">
        <a className="item" href="" onClick={e => {
            e.preventDefault()
            onClick(id)
        }}>
            <h2 className="item__title">{title}</h2>
            <img className="item__image" src={image} />
            <span className="item__price">{price}</span>
            <span className="item__fav" onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                onFav(id)
            }}>💔</span>
        </a>
    </li>
}