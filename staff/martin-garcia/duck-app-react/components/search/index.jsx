function Search({ onSearch, results, error, onResultsRender }) {
    return  <section className="search">
                <nav className="search__nav nav">
                    <form className="myForm" onSubmit={event => {
                        event.preventDefault()
                        const query = event.target.query.value
                        onSearch(query)
                        }}>
                        <input className="myForm__search" type="search" name="query" placeholder="Are you looking for a special Duck?"/> 
                        <button> 
                            <i className="fas fa-search myForm__button" id="searchButton" aria-hidden="true"></i>
                        </button>
                    </form>
                </nav>
                {error && <Feedback message={error} />}

                {results && onResultsRender(results)}
            </section>
}
