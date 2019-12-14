function Search({ onSearch, results, user,onResultsRender }) {
    
    return <section className="view search _hide">
        <form onSubmit={function (event) {
            event.preventDefault()
            const { query: { value: query } } = event.target
            onSearch(query)
        }}>

            <h1 className="search__title">Search</h1>
            <h2 className="search__user">{user}</h2>
            <span className="search__icon">🦆</span>
            <input type="text" className="search__criteria" name="query" placeholder="criteria" />
            <button className="search__submit">🔍</button>

            {}</form>
            
        {results && onResultsRender(results)}
    </section>
}
