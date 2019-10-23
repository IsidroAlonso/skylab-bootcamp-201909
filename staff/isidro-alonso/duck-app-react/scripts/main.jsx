const { Component } = React

class App extends Component {
    constructor () {
        super()

        this.state = { view: 'access', error: undefined }
        
        // this.handleGoToAccess = this.handleGoToAccess.bind(this)
        // this.handleGoToRegister = this.handleGoToRegister.bind(this)
        // this.handleAccess = this.handleAccess.bind(this)
        // this.handleRegister = this.handleRegister.bind(this)
        // this.handleSearch = this.handleSearch.bind(this)
        // this.handleGoToStore = this.handleGoToStore.bind(this)
        // this.handleGoBackToResults = this.handleGoBackToResults.bind(this)
    }

    handleGoToAccess = () => {
        this.setState({ view: 'access' })
    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleAccess = (email, password) => {
        try {
            authenticateUser(email, password, (error, data) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ error: undefined, view: 'search', data })
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
                else this.setState({ error: undefined, view: 'search' })
            })
        } 
        catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleSearch = (query) => {
        try {
            searchDucks(query, (error, ducks) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ error: undefined, ducks })
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

    render() {
        const {state: {view, error, ducks, duck}, handleGoToAccess, handleGoToRegister, handleAccess, handleRegister, handleSearch, handleDetail, handleGoBackToResults} = this

        return<>
            {view === 'access' && <Access toRegister={handleGoToRegister} userAccess={handleAccess} error={error} />}
            {view === 'register' && <Register toAccess={handleGoToAccess} userRegister={handleRegister} error={error} />}
            {view === 'search' && <Search doTheSearch={handleSearch} results={ducks} error={error} resultsRender={results => <Results items={results} itemRender={item => <ResultItem item={item} key={item.id} onClick={handleDetail} />} />} />}
            {view === 'detail' && <Detail item={duck} goBackToResults={handleGoBackToResults} />}
        </>
    }
}

ReactDOM.render(<>
    <h1 className="maintitle">Duckle</h1>
    <App />
</>, document.getElementById('root'))