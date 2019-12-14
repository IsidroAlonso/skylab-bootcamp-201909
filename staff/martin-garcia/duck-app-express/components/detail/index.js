module.exports = function({ path, duckSpecs }) {
    return `<section class="result">
    
        <a class="header__nav" href='${path}'> <i class="fas fa-arrow-circle-left" aria-hidden="true"></i> Wanna come back?</a>
   
    <main class="result__main main">
        <article class="main__article article__specs">
            <p class="article__title">${duckSpecs.title}</p>
            <div class="article__specs__container">
                <img class="article__image" src=${duckSpecs.imageUrl} />
                <p class="article__description">${duckSpecs.description}</p>
            </div>
            <p class="article__price">${duckSpecs.price}</p>
            <a href=${duckSpecs.link}>Buy it here!</a>
        </article>
    </main>
</section>`

}