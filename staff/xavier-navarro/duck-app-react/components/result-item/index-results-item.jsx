function ResultItem({ item: { id, title, imageUrl, price, fav }, onClick, onFav }) {
    return <li className="results__item">
        <a href="#" className="duck" onClick={event => {
            event.preventDefault()
            if(event.target.classList.contains("duck__fav")){
                onFav(id)
            } else{
                onClick(id)
            }
        }}>
            <h2 className="duck__title">{title}</h2>
            <img className="duck__img" src={imageUrl} />
            <p className="duck__price"><span className="price-tag">{price}</span></p>
            <span className="duck__fav">{fav ? "❤" : "💥"}</span>
     
        </a>
    </li>
}