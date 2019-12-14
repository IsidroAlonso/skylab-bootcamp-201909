const express = require('express')
const { registerUser, authenticateUser, retrieveUser, searchDucks, toggleFavDuck, retrieveDuck, retrieveFavDucks, retrieveRandomDucks } = require('./logic')
const { Register, View, Login, Header, LogBar, Search, Detail } = require('./components')

const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const { argv: [, , port = 9090] } = process
const app = express()

app.use(express.static('public'))

app.use(session({
    store: new FileStore({}),
    secret: 'a super secret thing',
    saveUninitialized: true,
    resave: true
}))

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send(View({ body: Login({ path: '/login', register: '/register' }), header: (Header({})) }))
})

app.get('/login', (req, res) => {
    res.send(View({ body: Login({ path: '/login', register: '/register' }), header: (Header({})) }))
})

app.get('/register', (req, res) => {
    res.send(View({ body: Register({ path: '/register', login: '/login' }), header: (Header({})) }))
})

app.post('/register', formBodyParser, (req, res) => {

    const { body: { name, lastName, mail, password, age } } = req
    try {
        registerUser(name, lastName, mail, password, age)
            .then((data) => res.redirect("/login"))
            .catch(error => res.send(View({ body: Register({ path: '/register', login: '/login', error }), header: (Header({})) })))
    } catch (error) {
        res.send(View({ body: Register({ path: '/register', login: '/login', error }), header: (Header({})) }))
    }

})

app.post('/login', formBodyParser, (req, res) => {
    const { session, body: { mail, password } } = req
    try {
        authenticateUser(mail, password)
            .then(credentials => {
                const { id, token } = credentials
                session.userId = id
                session.token = token

                session.save(() => res.redirect('/search'))
            })
            .catch(error => res.send(View({ body: Login({ path: '/login', register: '/register', error }), header: (Header({})) })))
    } catch (error) {
        res.send(View({ body: Login({ path: '/login', register: '/register', error }), header: (Header({})) }))
    }
})

app.get('/search', (req, res) => {
    try {
        const { session, query: { q: query } } = req

        if (!session) return res.redirect('/login')

        const { userId: id, token, random } = session

        if (!id) return res.redirect('/login')
        let name
        retrieveUser(id, token)
            .then(user => {
                const { data: { name } } = user
                session.name = name
                session.save()
                    /* if (!query) return res.send(View({ body: Search({ path: '/search' }), header: (Header({ logBar: { path: "/logout", userName: name } })) })) */
                if (!query && !random) {


                    return retrieveRandomDucks(7, id, token)
                        .then((ducks) => {
                            session.random = ducks
                            session.save()
                            res.send(View({ body: Search({ path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' }), header: (Header({ logBar: { path: "/logout", userName: name } })) }))
                        })
                } else if (!query && random) {
                    return res.send(View({ body: Search({ path: '/search', results: random, favPath: '/fav', detailPath: '/ducks' }), header: (Header({ logBar: { path: "/logout", userName: name } })) }))
                }



                session.query = query
                session.view = 'search'
                session.save()

                return searchDucks(query, id, token)
                    .then((ducks) => {
                        res.send(View({ body: Search({ path: '/search', query, results: ducks, favPath: '/fav', detailPath: '/ducks' }), header: (Header({ logBar: { path: "/logout", userName: name } })) }))
                    })
            })
            .catch(error => res.send(View({ body: Search({ path: '/search', query, error }), header: (Header({ logBar: { path: "/logout", userName: name } })) })))

    } catch (error) {
        res.send(View({ body: Search({ path: '/search', query, error }), header: (Header({})) }))
    }

})


app.post('/fav', formBodyParser, (req, res) => {
    try {
        const { session, body: { id: duckId }, headers: { referer } } = req

        if (!session) return res.redirect('/')

        const { userId: id, token } = session

        if (!token) return res.redirect('/')


        toggleFavDuck(id, token, duckId)
            .then(() => res.redirect(referer))
            .catch(({ message }) => res.send(message))
    } catch (error) {
        res.send(error.message)
    }
})


app.post('/logout', (req, res) => {
    const { session } = req

    session.destroy(() => {
        res.clearCookie('connect.sid', { path: '/' })
            /*     res.setHeader('set-cookie', 'id=""; expires=Thu, 01 Jan 1970 00:00:00 GMT')
             */
        res.redirect('/login')
    })
})

app.get(('/ducks/:id'), (req, res) => {
    try {
        const { session, params: { id: duckId } } = req

        if (!session) return res.redirect('/login')

        const { userId: id, token, view, query, name } = session

        if (!token) return res.redirect('/login')

        retrieveDuck(duckId)
            .then(duck => {
                res.send(View({ body: Detail({ path: view === 'search' ? `/search?q=${query}` : '/search', duckSpecs: duck }), header: (Header({ logBar: { path: "/logout", userName: name } })) }))
            })
            .catch(({ error }) => res.send(error))

    } catch (error) {
        res.redirect(`/search`)
    }
})

app.get('/favourites', formBodyParser, (req, res) => {
    try {
        const { session } = req

        if (!session) return res.redirect('/')

        const { userId: id, token, name } = session

        if (!token || !id) return res.redirect('/')

        retrieveFavDucks(id, token)
            .then(ducks => {
                console.log(ducks);
                /* deberíalle pasar query en search??? */
                return res.send(View({ body: Search({ path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' }), header: (Header({ logBar: { path: "/logout", userName: name } })) }))
            })
            .catch(error => { res.send('error on favourite ducks bro') })

    } catch (error) {
        res.send('error on favourite catch')
    }
})





app.listen(port, () => console.log(`server running on por ${port}`))