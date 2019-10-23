function Search({doTheSearch, error}) { //, query
    return <section className="view">
        <form className="search" onSubmit={e => {
            e.preventDefault()
            const {query: {value: query}} = e.target // !!mal
            doTheSearch(query)
        }}>
            <input className="search__criteria" type="text" name="query" placeholder="criteria" />
            <button className="search__submit">🔍</button>
        </form>
        {results && <Results />}
        {error && <Feedback message={error} />}
    </section>
}