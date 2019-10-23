function Detail ({ goToStore, goBackToResults, error}) {
    return <section class="detail">
        <h2 class="detail__title">Duck X</h2>
        <img class="detail__image" src="https://fakeimg.pl/500x300/?text=Hello" />
        <p class="detail__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque omnis
            sunt dolor repellat incidunt voluptates odio eos consequatur corrupti. Accusantium porro minima molestias
            voluptatem dolor nobis! Perspiciatis, vero maiores!</p>
        <a class="detail__store" href="" onClick={e => {
            e.preventDefault()
            goToStore()
        }}>Go to store</a>
        <span class="detail__price">10€</span>
        <a class="detail__back" href="" onClick={e => {
            e.preventDefault()
            goBackToResults()
        }}>Go back</a>
        {error && <Feedback message={error} />}
    </section>
}