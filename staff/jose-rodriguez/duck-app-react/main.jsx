const { Component } = React


const {id, token} = sessionStorage

class App extends Component {
    constructor() {
        super()
        this.state = { view: id && token ? 'search' : 'landing', error: undefined, ducks: [], query: "" }

        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleBackFromRegister = this.handleBackFromRegister.bind(this)
        this.handleBackFromLogin = this.handleBackFromLogin.bind(this)
        this.handleDetail = this.handleDetail.bind(this)
        this.handleBackToSearch = this.handleBackToSearch.bind(this)
        this.handleFav = this.handleFav.bind(this)
    }

    componentWillMount() {
        const { id, token } = sessionStorage

        if (id && token)
            try {
                retrieveUser(id, token, (error, user) => {

                    const { name } = user
                    if (error) this.setState({ error: error.message })
                    else this.setState({ user: name })
                })
            } catch (error) {
                this.setState({ error: error.message })
            }

        const { state: { query } } = this

    }

    handleGoToRegister() {
        this.setState({ view: 'register' })
    }

    handleBackFromRegister() {
        this.setState({ view: 'landing' })
    }

    handleGoToLogin() {
        this.setState({ view: 'login' })
    }

    handleBackFromLogin() {
        this.setState({ view: 'landing' })
    }

    handleRegister(name, surname, email, password) {
        try {
            registerUser(name, surname, email, password, error => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'landing' })
            })
        } catch (error) {
            this.setState({ error: error.message })
        }

    }


    handleLogin = (email, password) => {
        try {
            authenticateUser(email, password, (error, data) => {
                if (error) this.setState({ error: error.message })
                else
                    try {
                        const { id, token } = data
                        sessionStorage.id = id
                        sessionStorage.token = token


                        retrieveUser(id, token, (error, user) => {
                            const { name } = user
                            if (error) this.setState({ error: error.message })
                            else this.setState({ view: 'search', user: name })
                        })
                    } catch (error) {
                        this.setState({ error: error.message })
                    }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleSearch(query) {

        try {
            searchDucks(query, id, token, (error, ducks) => {
                if (error) this.setState({ error: error.message })

                else this.setState({ ducks, query })

            })

        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleBackToSearch() {
        this.setState({ view: 'search' })
    }

    handleDetail(id) {
        retrieveDuck(id, (error, duck) => {
            if (error) {
                this.setState({ error: error.message })

            } else {
                this.setState({ view: 'detail', duck })
            }
        })
    }

    handleFav(duckId) {
        const { query } = this.state
        toggleFavDuck(id, token, duckId, (error, data) => {
            if (error) return this.setState({ error: error.message })
                const {state: {query}}  = this
            
            searchDucks(query, id, token, (error, ducks) => {
                    if (error) this.setState({ error: error.message })
                    else this.setState({ ducks })

                })



        })

    }

    render() {

        const { state: { view, ducks, duck, user, error }, handleGoToRegister, handleBackFromRegister, handleGoToLogin, handleBackFromLogin, handleRegister, handleLogin, handleSearch, handleDetail, handleBackToSearch, handleFav } = this
        return <>
            {view === 'landing' && <Landing onLogin={handleGoToLogin} onRegister={handleGoToRegister} />}
            {view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} error={error} />}
            {view === 'login' && <Login onLogin={handleLogin} onBack={handleBackFromLogin} error={error} />}
            {view === 'search' && <Search onSearch={handleSearch} results={ducks} error={error} onResultsRender={results => <Results items={results} onItemRender={item => <ResultItem item={item} key={item.id} onClick={handleDetail} onFav={handleFav} />} />} user={user} />}
            {view === 'detail' && <Detail item={duck} onBack={handleBackToSearch} onFav={handleFav} />}
        </>

    }
}
ReactDOM.render(<App />, document.getElementById('root'))