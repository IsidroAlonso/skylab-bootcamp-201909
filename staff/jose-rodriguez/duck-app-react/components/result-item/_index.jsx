function ResultItem({ item: { isFav, id, title, image, price }, onClick, onFav }) {
  
        return <li key={id} className="results__item">
            <a href="" className="item" onClick={event => {
                event.preventDefault()

                onClick(id)
            }}>
                <h2 className="item__title">{title} </h2>
                <img src={image} className="item__image" />
                <p className="item__price">{price} </p>
                <i className={isFav ? "fas fa-heart" : "fas fa-hand-middle-finger"}  onClick={event => {
                    event.preventDefault()
                    event.stopPropagation()

                    onFav(id)
                }}></i>
            </a>
        </li>
        }
        
