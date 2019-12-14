/*************************** COMPOS *********************/
const { Landing, Login, Register, Search, Detail, View, UserPage } = require('./components')


/************************* LOGIC ************************/
const { authenticateUser, retrieveUser, registerUser, searchDucks, retrieveDuck, toggleFavDuck, retrieveFavDucks } = require('./logic')


/********************** MISC **************************/
const shuffle = require('./utils/array-shuffle')
shuffle()
const { argv: [, , port = 8080] } = process
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)


const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', 'components')


app.use(session({
    store: new FileStore({
    }),
    secret: 'a super secret thing',
    saveUninitialized: true,
    resave: true
}))


const formBodyParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    //res.send(View({ body: Landing({ login: '/login', register: '/register' }) }))
    res.render('landing', { login: '/login', register: '/register' })
})

app.get('/register', (req, res) => {
    const { token } = req.session
    if (token) return res.redirect('/search')

    //res.send(View({ body: Register({ path: '/register' }) }))
    res.render('register', { path: '/register' })
})

app.post('/register', formBodyParser, (req, res) => {

    const { body: { name, surname, email, password } } = req

    try {
        registerUser(name, surname, email, password)
            .then(() => res.redirect('/'))
            .catch(({ message }) => res.send(View({ body: Register({ path: '/register', error: message }) })))

    } catch ({ message }) {
        res.send(View({ body: Register({ path: '/register', error: message }) }))
    }
})

app.get('/login', (req, res) => {
    const { token } = req.session
    if (token) return res.redirect('/search')

    //res.send(View({ body: Login({ path: '/login' }) }))
    res.render('login', { path: '/login' })
})

app.post('/login', formBodyParser, (req, res) => {

    const { session, body: { email, password } } = req
    try {
        authenticateUser(email, password)
            .then(({ id, token }) => {

                session.userId = id
                session.token = token

                session.save(() => res.redirect('./search'))
            })
            .catch(({ message }) => //res.send(View({ body: Login({ path: '/login', error: message }) }))
                res.render('login',{ path: '/login', error: message })
            )

    } catch ({ message }) {
        //res.send(View({ body: Login({ path: '/login', error: message }) }))
        res.render('login',{ path: '/login', error: message })
    }
})

app.get('/search', (req, res) => {
    try {
        const { session, query: { query } } = req

        if (!session) return res.redirect('/')

        const { userId: id, token } = session
        if (!token) return res.redirect('/')

        let name
        retrieveUser(id, token)
            .then(user => {
                name = user.name
                if (!query) {
                    const { randoms } = session
                    session.view = 'home'
                    if (!randoms) return searchDucks(id, token, '')
                        .then(ducks => {
                            ducks = ducks.shuffle().splice(0, 3)
                            session.randoms = [ducks[0].id, ducks[1].id, ducks[2].id]
                            session.save(() => //res.send(View({ body: Search({ logout: '/logout', name, query, path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' }) }))
                                res.render('search', { logout: '/logout', name, query, path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' })
                            )
                        })
                    const calls = randoms.map(duckId => retrieveDuck(id, token, duckId))
                    return Promise.all(calls)
                        .then(ducks => //res.send(View({ body: Search({ logout: '/logout', name, query, path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' }) }))
                            res.render('search', { logout: '/logout', name, query, path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' })
                        )
                }
                return searchDucks(id, token, query)
                    .then(ducks => {
                        session.query = query
                        session.view = 'search'
                        session.save(() => //res.send(View({ body: Search({ logout: '/logout', name, query, path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' }) }))                        
                            res.render('search', { logout: '/logout', name, query, path: '/search', results: ducks, favPath: '/fav', detailPath: '/ducks' })
                        )
                    })
            })
            .catch(({ message }) => //res.send(View({ body: Search({ logout: '/logout', name, query, path: '/search', error: message }) }))
                res.render('search', { logout: '/logout', name, query, path: '/search', error: message })
            )
    } catch ({ message }) {
        //res.send(View({ body: Search({ logout: '/logout', name, query, path: '/search', error: message }) }))
        res.render('search', { logout: '/logout', name, query, path: '/search', error: message })
    }

})

app.get('/logout', (req, res) => {
    const { session } = req

    session.destroy(() => {
        res.clearCookie('connect.sid', { path: '/' })
        res.redirect('/')
    })
})

app.post('/fav', formBodyParser, (req, res) => {
    try {
        const { session, body: { id: duckId } } = req
        if (!session) return res.redirect('/')

        const { query, userId: id, token, view } = session
        if (!token) return res.redirect('/')

        toggleFavDuck(id, token, duckId)
            .then(() => {
                let backPath
                switch (view) {
                    case 'detail': backPath = `/ducks/${duckId}`; break;
                    case 'search': backPath = `/search?query=${query}`; break;
                    case 'home': backPath = '/search'; break;
                    case 'userpage': backPath = `/userpage`; break;
                    default: backPath = '/'
                }
                res.redirect(backPath)
            })
            .catch(({ message }) => //res.send(View({ body: Search({ logout: '/logout', query, path: '/search', error: message }) }))
                res.render('search', { logout: '/logout', query, path: '/search', error: message })
            )
    } catch ({ message }) {
        //res.send(View({ body: Search({ logout: '/logout', query, path: '/search', error: message }) }))
        res.render('search', { logout: '/logout', query, path: '/search', error: message })
    }
})


app.get('/ducks/:id', (req, res) => {

    try {
        const { params: { id: duckId }, session } = req
        if (!session) return res.redirect('/')

        const { userId: id, token, query, view } = session
        if (!token) return res.redirect('/')

        retrieveDuck(id, token, duckId)
            .then(duck => {
                switch (view) {
                    case 'search': session.backPath = `/search?query=${query}`; break;
                    case 'home': session.backPath = '/search'; break;
                    case 'userpage': session.backPath = `/userpage`; break;
                }
                const { backPath } = session
                session.view = 'detail'
                session.save(() => //res.send(View({ body: Detail({ duck, goBack: backPath, favPath: '/fav' }) }))
                    //res.render('detail', { duck, goBack: backPath, favPath: '/fav' })
                    res.render('search', { logout: '/logout', query, path: '/search', error: message })
                )
            })
            .catch(({ message }) => {
                //res.send(View({ body: Search({ logout: '/logout', query, path: '/search', error: message }) }))
                res.render('search', { logout: '/logout', query, path: '/search', error: message })
            })

    } catch ({ message }) {
        //res.send(View({ body: Search({ logout: '/logout', query, path: '/search', error: message }) }))
        res.render('search', { logout: '/logout', query, path: '/search', error: message })
    }
})

app.get('/userpage', (req, res) => {

    try {
        const { session } = req
        if (!session) return res.redirect('/')

        const { userId: id, token } = session
        if (!token) return res.redirect('/')

        retrieveUser(id, token)
            .then(user => {
                return retrieveFavDucks(id, token)
                    .then(ducks => {
                        session.view = 'userpage'
                        session.save(() => //res.send(View({ body: UserPage({ logout: '/logout', user, results: ducks, favPath: '/fav', detailPath: '/ducks', goBack: '/search' }) }))
                            res.render('user-page', { logout: '/logout', user, results: ducks, favPath: '/fav', detailPath: '/ducks', goBack: '/search' })
                        )
                    })
            })
            .catch(({ message }) => {
                //res.send(View({ body: Search({ logout: '/logout', path: '/search', error: message }) }))
                res.render('search', { logout: '/logout', path: '/search', error: message })
            })
    } catch ({ message }) {
        //res.send(View({ body: Search({ logout: '/logout', path: '/search', error: message }) }))
        res.render('search', { logout: '/logout', path: '/search', error: message })
    }

})

app.listen(port, () => console.log(`>> Server running at port :${port} <<`))