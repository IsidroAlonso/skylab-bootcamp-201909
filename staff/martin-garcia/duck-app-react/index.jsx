const { Component } = React
const { id, token } = sessionStorage

class App extends Component {
    constructor() {
        super()

        this.state = { view: id && token ? 'search' : 'login', error: undefined, ducks: this.handleSearch(''), duckSpecs: undefined, user: undefined }

    }

    componentWillMount() {
        if (id && token) {
            retrieveUser(id, token, (result) => {

                result.status ? this.setState({ view: 'search', user: result.data.username }) : this.setState({ error: 'Your backend programmers sucks' })

            })
        }
    }


    handleLogin = (mail, password) => {
        try {
            logIn(mail, password, (error, data) => {
                if (error) { this.setState({ error: error.message }) }
                else {
                    sessionStorage.setItem('id', data.id)
                    sessionStorage.setItem('token', data.token)

                    searchDucks('', sessionStorage.id, sessionStorage.token, (error, ducks) => {
                        error ? this.setState({ error: error.message }) : this.setState({ view: 'search', ducks: ducks.shuffle().slice(0, 7), user: mail })
                    })
                }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleRegister = (name, lastName, mail, password, age) => {
        try {
            registUser(name, lastName, mail, password, age, (error, data) => {
                (error) ? this.setState({ error: error.message }) : this.setState({ view: 'login' })

            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login' })
    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleSearch = (query) => {
        const { id, token } = sessionStorage
        try {
            searchDucks(query, id, token, (error, result) => {
                (error) ? this.setState({ error: error.message }) : this.setState({ view: 'search', error: undefined, ducks: result })
            })
        } catch (error) {
            this.setState({ error: error.message })

        }
    }

    handleDetail = (id) => {
        try {
            retrieveDuck(id, (error, duckSpecs) => {
                (error) ? this.setState({ error: error.message }) : this.setState({ view: 'detail', duckSpecs })
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleGoBack = () => {

        this.setState({ view: 'search' })
    }

    handleSignOut = () => {
        this.setState({ view: 'login', user: undefined }, () => { sessionStorage.clear() })
    }


    handleToggleFavDuck = (duckId) => {
        const { ducks } = this.state

        try {
            toggleFavDuck(sessionStorage.id, sessionStorage.token, duckId, (result) => {
                if (result.error) {
                    this.setState({ erro: result.error })
                } else {
                    debugger
                    retrieveDucks(ducks, sessionStorage.id, sessionStorage.token, (error, result) => {
                        (error) ? this.setState({ error: error.message }) : this.setState({ view: 'search', error: undefined, ducks: result })
                    })
                }
            })
        }
        catch (error) {
            this.setState({ error })
        }
    }



    render() {
        const { state: { view, error, ducks, duckSpecs, user }, handleGoToRegister, handleGoToLogin, handleRegister, handleLogin, handleSearch, handleDetail, handleGoBack, handleSignOut, handleToggleFavDuck } = this

        return <>
            <Header user={user} onSignOut={handleSignOut} />
            {view.includes('login') && <Login onLogin={handleLogin} onGoRegister={handleGoToRegister} error={error} />}
            {view.includes('register') && <Register onRegister={handleRegister} onGoLogin={handleGoToLogin} error={error} />}
            {view.includes('search') && <Search onSearch={handleSearch} error={error} results={ducks} onResultsRender={results => <Results items={results} onItemRender={item => <ResultItem item={item} key={item.id} onClick={handleDetail} onToggleFav={handleToggleFavDuck} />} />} />}
            {view.includes('detail') && <Detail onGoBack={handleGoBack} duckSpecs={duckSpecs} />}
            <Footer />
        </>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))