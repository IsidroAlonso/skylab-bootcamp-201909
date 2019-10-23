class App extends React.Component {
    constructor () {
        super()

        this.state = { view: 'access', error: undefined }
        
        this.handleGoToAccess = this.handleGoToAccess.bind(this)
        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleAccess = this.handleAccess.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleGoToStore = this.handleGoToStore.bind(this)
        this.handleGoBackToResults = this.handleGoBackToResults.bind(this)
    }

    handleGoToAccess () {
        this.setState({ view: 'access' })
    }

    handleGoToRegister () {
        this.setState({ view: 'register' })
    }

    handleAccess(email, password) {
        try {
            authenticateUser(email, password, (error, data) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'search', data })
            })
        } 
        catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleRegister(email, password) {
        try {
            registerUser(email, password, (error) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'search' })
            })
        } 
        catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleSearch(query) {
        try {
            searchDucks(query, (error, result) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: result })
            })
        } 
        catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleGoToStore() {
        //
    }

    handleGoBackToResults() {
        this.setState({ view: 'results' })
    }

    render() {
        const {state: {view, error}, handleGoToAccess, handleGoToRegister, handleAccess, handleRegister, handleSearch, handleGoToStore, handleGoBackToResults} = this

        return<>
            {view === 'access' && <Access toRegister={handleGoToRegister} userAccess={handleAccess} error={error} />}
            {view === 'register' && <Register toAccess={handleGoToAccess} userRegister={handleRegister} error={error} />}
            {view === 'search' && <Search doTheSearch={handleSearch} result={result} error={error} />}
            {view === 'detail' && <Detail goToStore={handleGoToStore} goBackToResults={handleGoBackToResults} error={error} />}
        </>
    }
}

ReactDOM.render(<>
    <h1 className="maintitle">Duckle</h1>
    <App />
</>, document.getElementById('root'))