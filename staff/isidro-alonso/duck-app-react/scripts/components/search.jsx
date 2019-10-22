function Search({doTheSearch}) {
    return <section className="view">
        <form className="search" onSubmit={e => {
            e.preventDefault()
            const {search: {value: searchBar}} = e.target
            doTheSearch(searchBar)
        }}>
            <input className="search__criteria" type="text" name="search" placeholder="criteria" />
            <button className="search__submit">🔍</button>
        </form></section>
}