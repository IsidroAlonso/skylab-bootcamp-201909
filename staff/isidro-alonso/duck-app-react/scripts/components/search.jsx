function Search({doTheSearch, results, error, resultsRender}) { 
    return <section className="view">
        <form className="search" onSubmit={e => {
            e.preventDefault()
            const query = e.target.query.value
            doTheSearch(query)
        }}>
            <input className="search__criteria" type="text" name="query" placeholder="criteria" />
            <button className="search__submit">🔍</button>
        </form>
        {error && <Feedback message={error} />}
        {results && resultsRender(results)}
    </section>
}