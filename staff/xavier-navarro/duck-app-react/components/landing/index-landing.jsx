const { Component } = React

class Landing extends Component {
    constructor({user, error}) {
        super()

        this.user = user
        this.error = error

        this.state = { view: 'search', user: user, error: undefined}
    }

    handleSearch = (query) => {
        searchDucks(query, (error, results) => {
                if (error) this.setState({ error: error.message })              
                else {
                    this.setState({ view: 'results', results: results }) 
                    // this.setState({...this.state, view: 'results', ducks: ducks })
                }
            })
    }
    handleBackToSearch = () => {
        this.setState({ view: 'search' })
    }
    handleDetail = (id) => {
        try {
            retrieveDuck(id, (error, duck) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'detail', duck });
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }
    handleFav = (id) => {
        try {
            retrieveUser(sessionStorage.id, sessionStorage.token, (error, data) =>{debugger
                if (error) this.setState({ error: error.message })
                else{
                    let favs
                    data.fav ? favs = data.fav :  favs = []

                    favs.includes(id) ? favs = data.fav.filter(a => a !== id) : favs.push(id)
                    
                    toggleFav(data.id, sessionStorage.token, { fav: favs }, (error, result) => {
                        if (error) this.setState({ error: error.message })
                    })
                }
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    
    render() { 
        const { state: { view, results, duck },  handleSearch, user, error, handleDetail, handleFav,handleBackToSearch} = this

        return <> 
            {<Search user={user} onSearch={handleSearch} error={error} />}  
            {view === 'results' && <Results items={results} onItemRender={item => <ResultItem item={item} key={item.id} onClick={handleDetail} onFav={handleFav} />} />}
            {view === 'detail' && <Detail item={duck} onBack={handleBackToSearch} />}
        </>
    }

}

// TODO search
