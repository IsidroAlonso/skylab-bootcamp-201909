const { id, token } = sessionStorage

const { query } = location

class App extends React.Component {
    constructor() {
        super()

        this.state = { view: 'access', error: undefined, ducks: undefined, duck: undefined, user: undefined }

        // this.handleGoToAccess = this.handleGoToAccess.bind(this)
        // this.handleGoToRegister = this.handleGoToRegister.bind(this)
        // this.handleAccess = this.handleAccess.bind(this)
        // this.handleRegister = this.handleRegister.bind(this)
        // this.handleSearch = this.handleSearch.bind(this)
        // this.handleGoToStore = this.handleGoToStore.bind(this)
        // this.handleGoBackToResults = this.handleGoBackToResults.bind(this)
    }

    saveUserInfo = () => {
        const { id, token } = sessionStorage

        if (id && token)
            try {
                retrieveUser(id, token, (error, { name }) => {
                    if (error) this.setState({ error: error.message })
                    else this.setState({ user: name })
                })
            } catch (error) {
                this.setState({ error: error.message })
            }

        const { state: { query } } = this

        query && this.handleSearch(query)
    }

    handleGoToAccess = () => {
        this.setState({ view: 'access' })
    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleAccess = (email, password) => {
        try {
            authenticateUser(email, password, (error, { id, token }) => {
                if (error) this.setState({ error: error.message })
                else
                    try {

                        sessionStorage.id = id
                        sessionStorage.token = token

                        retrieveUser(id, token, (error, { name }) => {
                            if (error) this.setState({ error: error.message })
                            else this.setState({ error: undefined, view: 'search', user: name })
                        })
                    }
                    catch (error) {
                        this.setState({ error: error.message })
                    }
            })
        }
        catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleRegister = (name, email, password) => {
        try {
            registerUser(name, email, password, (error) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ error: undefined, view: 'search', user: name })
            })
        }
        catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleSearch = (id, token, query) => {
        try {
            searchDucks(id, token, query, (error, ducks) => {
                if (error) this.setState({ error: error.message })
                else {
                    location.query = query
                    this.setState({ error: undefined, ducks })
                }
            })
        }
        catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleDetail = (id) => {
        try {
            retrieveDuck(id, (error, duck) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'detail', duck })
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleGoBackToResults = () => {
        this.setState({ view: 'search' });
    }

    handleLogout = () => {
        sessionStorage.clear()
        this.setState({ view: 'access', error: undefined, ducks: undefined, duck: undefined, user: undefined });
    }

    handleFav = (duckId) => { 

        const { id, token } = sessionStorage

        try {
            toggleFavDuck(id, token, duckId, error => {
                if (error) this.setState({ error: error.message })
                else {
                    try {
                        searchDucks(id, token, query, (error, ducks) => {
                            if (error) this.setState({ error: error.message })
                            else {
                                location.query = query
                                this.setState({ error: undefined, ducks })
                            }
                        })
                    }
                    catch (error) {
                        this.setState({ error: error.message })
                    }
                }
            })


        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    render() {
        const { state: { view, error, ducks, duck, user }, handleGoToAccess, handleGoToRegister, handleAccess, handleRegister, handleSearch, handleDetail, handleFav, handleGoBackToResults, handleLogout } = this

        return <>
            {view === 'access' && <Access toRegister={handleGoToRegister} userAccess={handleAccess} error={error} />}
            {view === 'register' && <Register toAccess={handleGoToAccess} userRegister={handleRegister} error={error} />}
            {view === 'search' && <Intro user={user} exitWeb={handleLogout} />}
            {view === 'search' && <Search doTheSearch={handleSearch} results={ducks} error={error} resultsRender={results => <Results items={results} itemRender={item => <ResultItem item={item} key={item.id} onClick={handleDetail} onFav={handleFav} />} />} user={user} query={query} />}
            {view === 'detail' && <Detail item={duck} goBackToResults={handleGoBackToResults} />}
        </>
    }
}

ReactDOM.render(<>
    <h1 className="maintitle">Duckle</h1>
    <App />
</>, document.getElementById('root'))