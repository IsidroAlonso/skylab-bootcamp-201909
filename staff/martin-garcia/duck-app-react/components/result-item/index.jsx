function ResultItem({ onToggleFav, item: { id, title, imageUrl, price, isFav}, onClick }) {
    return <article className="main__article">
        <a className="item" onClick={event => {
            event.preventDefault()

            onClick(id)
        }}>
            <p className="article__title">{title}</p>
            <img className="article__image" src={imageUrl} />
            <div className="article__details">
                <p className="article__details__price">{price}</p>
                {
                    (isFav === "true") ? <img className="article__details__fav" src="style/fav.png" alt="id favourite?"  onClick={event=>{
                        event.preventDefault()
                        event.stopPropagation()
    
                        onToggleFav(id)
    
                    }}/>
                    :  <img className="article__details__fav" src="style/notFav.png" alt="id favourite?"  onClick={event=>{
                        event.preventDefault()
                        event.stopPropagation()
    
                        onToggleFav(id)
    
                    }}/>
                }
               
            </div>
        </a>
    </article>
}