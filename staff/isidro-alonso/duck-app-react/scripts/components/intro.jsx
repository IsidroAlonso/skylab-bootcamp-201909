function Intro({ user, exitWeb }) {
    return <section className="view">
        <h2 className="search__user">Hello, {user}</h2>
        <p><a className="search__link" href="" onClick={e => {
            e.preventDefault()
            sessionStorage.clean
            exitWeb()
        }}>Logout</a></p>
    </section>
}