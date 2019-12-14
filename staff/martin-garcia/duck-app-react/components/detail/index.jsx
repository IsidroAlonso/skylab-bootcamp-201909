function Detail({ onGoBack, duckSpecs }) {
    debugger
    return <section className="result">
        <header className="result__header header">
            <button className="header__nav" onClick={event => {
                event.preventDefault()
                debugger
                onGoBack()
            }}> <i className="fas fa-arrow-circle-left" aria-hidden="true"></i> Wanna come back?</button>
        </header>
        <main className="result__main main">
            <article className="main__article article__specs">
                <p className="article__title">{duckSpecs.title}</p>
                <div className="article__specs__container">
                    <img className="article__image" src={duckSpecs.imageUrl} />
                    <p className="article__description">{duckSpecs.description}</p>
                </div>
                <p className="article__price">{duckSpecs.price}</p>
                <a href={duckSpecs.link}>Buy it here!</a>
            </article>
        </main>
    </section>

}