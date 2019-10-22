class App extends React.Component {
    constructor () {
        super()

        this.state = { view: 'access', error: undefined }
        
        this.handleGoToAccess = this.handleGoToAccess.bind(this)
        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleAccess = this.handleAccess.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleGoToAccess () {
        this.setState({ view: 'access', error: undefined })
    }

    handleGoToRegister () {
        this.setState({ view: 'register', error: undefined })
    }

    handleAccess(email, password) {
        authenticateUser(email, password, () => {
            this.setState({ error: error.message })//({ view: 'search' })
        })
    }

    handleRegister(email, password) {
        // try {
            registerUser(email, password, () => {
                // if (error) Error.setState({ error: error.message })
                // else 
                this.setState({ view: 'search', error: undefined })
            })
        // } catch (error) {
        //     this.setState({ error: error.message })
        // }
    }

    handleSearch(search) {
        debugger
    }

    render() {
        const {state: {view, error}, handleGoToAccess, handleGoToRegister, handleAccess, handleRegister, handleSearch} = this

        return<>
            {view === 'access' && <Access toRegister={handleGoToRegister} userAccess={handleAccess} error={error} />}
            {view === 'register' && <Register toAccess={handleGoToAccess} userRegister={handleRegister} error={error} />}
            {view === 'search' && <Search doTheSearch={handleSearch} error={error} />}
        </>
    }
}

ReactDOM.render(<>
    <h1 className="maintitle">Duckle</h1>
    <App />
</>, document.getElementById('root'))