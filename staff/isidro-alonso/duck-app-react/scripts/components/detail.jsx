function Detail ({ goToStore, goBackToResults}) {
    return <section className="detail">
        <h2 className="detail__title"></h2>
        <img className="detail__image" src="https://fakeimg.pl/500x300/?text=Hello" />
        <p className="detail__description"></p>
        <a className="detail__store" href="" onClick={e => {
            e.preventDefault()
            goToStore()
        }}>Go to store</a>
        <span className="detail__price"></span>
        <a className="detail__back" href="" onClick={e => {
            e.preventDefault()
            goBackToResults()
        }}>Go back</a>
    </section>
}