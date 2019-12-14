function Header({ onSignOut, user }) {

    return <header className="header">
        <img className="header__logo" src="style/rubber-duck.svg" alt="Duck logo" />
        <h1>Duck-App</h1>

        {(user !== undefined) &&
            <section className="header__log log-bar ">
                <p className="log-bar__user">{user}</p>
                <button className="log-bar__button" onClick={event => {
                    event.preventDefault();
                    onSignOut()
                }}>Sign out</button>
            </section>
        }

    </header>

}
