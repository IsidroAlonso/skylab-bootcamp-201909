const { Component } = React
const { query } = location
class App extends Component {
    state = { view: sessionStorage.id && sessionStorage.token ? "": "login", user: undefined, error: undefined, ducks: [] }
    componentWillMount(){
        const { id, token } = sessionStorage
        if (id && token)
            try {
                retrieveUser(id, token, (undefined, credentials) =>{ 
                    this.setState({ view: 'landing', user: credentials.name })
                })
            } catch (error) {
                this.setState({ error: error.message })
            }
    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleGoToLogin = () => {
        this.setState({ view: 'login' })
    }

    handleRegister = (name, surname, email, password) => {
        try {
            registerUser(name, surname, email, password, error => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'login' })
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }
    handleLogin = (email, password) =>{
        try {
            authenticateUser(email, password, (error,credentials) => {
                if (error) this.setState({ error: error.message })
                else
                    try {
                        sessionStorage.id = credentials.id
                        sessionStorage.token = credentials.token
                        
                        retrieveUser(credentials.id, credentials.token, (undefined, credentials) =>{
                            this.setState({ view: 'landing', user: credentials.name })
                        })
                    } catch (error) {
                        this.setState({ error: error.message })
                    }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    render() {
        const { state: { view, error, user, ducks }, handleGoToRegister, handleGoToLogin, handleRegister, handleLogin } = this

        return <>
            {view === 'login' && <Login onLogin={handleLogin} onRegister={handleGoToRegister}/>}
            {view === 'register' && <Register onRegister={handleRegister} onLogin={handleGoToLogin} error={error} />}
            {view === 'landing' && <Landing user={user} error={error} />}
        </>
    }
}

// TODO search

ReactDOM.render(<App />, document.getElementById('root'))