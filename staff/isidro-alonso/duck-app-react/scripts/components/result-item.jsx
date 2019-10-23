function ResultItem({ item: { id, title, imageUrl, price }, onClick }) {
    return <li className="results__item">
        <a className="item" href="" onClick={e => {
            e.preventDefault()
            onClick(id)
        }}>
            <h2 className="item__title">{title}</h2>
            <img className="item__image" src={imageUrl} />
            <span className="item__price">{price}</span>
        </a>
    </li>
}