function Search({ onSearch, error, user }) {
    return <header className="header__container header">
                <div className="header__logo">
                    <img className="image" src="https://amsterdamduckstore.com/wp-content/uploads/2018/01/Sneowboard-rubber-duck-Amsterdam-Duck-Store.jpg" alt="DUCKGO"/>
                </div>
                <div className="header__company-name">
                    <h1 className="title">*DUCKSTAR*</h1>
                </div>
                <div className="header__home">
                    {user && <p>{user}</p>}
                </div>
                <div className="header__search search">
                    <form action="" id="duck-search" className="search__form" onSubmit={(event) => {
                        event.preventDefault()
                        const { search: { value: query } } = event.target
                        onSearch(query)
                    }}>
                        <input type="search" className="search__input" name="search" placeholder="Search"/>
                    </form>
                    {error && <Feedback message={error} />}
                </div>
            </header>
}