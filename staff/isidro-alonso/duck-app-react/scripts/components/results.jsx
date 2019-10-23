function Results({query, error}) {
    return <section className="view">
        <ul class="results">
            {query}
        </ul>
        {error && <Feedback message={error} />}
    </section>
}