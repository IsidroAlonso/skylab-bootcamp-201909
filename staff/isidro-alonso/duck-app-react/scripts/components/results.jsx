function Results({results, error}) {
    return <section className="view">
        <ul class="results">
            <li>{results}</li>
        </ul>
        {error && <Feedback message={error} />}
    </section>
}