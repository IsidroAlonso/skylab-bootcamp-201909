import React from 'react'
import { Link } from 'react-router-dom'

export default function ({ game: {id, title, platform, sell, exchange, favourite} }) {

    function showFav() {
        if(favourite) return <img src="img/favourite.png" alt="favourite" />
    }

    function showSell() {
        if(sell) return <img src="img/sell.png" alt="sell" />
    }

    function showExch() {
        if(exchange) return <img src="img/exchange.png" alt="exchange" />
    }

    const gameLink = `/mygame/${id}`

    const img = 'img/nodata.png'
    
    return <Link to={gameLink} className="game-item__link">
        <img className="game-item__img" src={img} alt="game" />
        <p className="game-item__title">{title}</p>
        <p className="game-item__platform">{platform}</p>
        <span className="game-item__favourite">{showFav()}</span>
        <span className="game-item__sell">{showSell()}</span>
        <span className="game-item__exchange">{showExch()}</span>
    </Link>
}