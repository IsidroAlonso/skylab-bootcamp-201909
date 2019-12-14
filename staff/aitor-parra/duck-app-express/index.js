const express = require('express')
const { View, Landing, Register, Login, Search, Detail } = require('./components')
const { registerUser, authenticateUser, retrieveUser, searchDucks, toggleFavDuck, retrieveDuck, retrieveFavDucks } = require('./logic')

/* const { bodyParser, cookieParser } = require('./utils/middlewares') */
//const querystring = require('querystring')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const { argv: [, , port = 9090] } = process

/* const sessions = {}
const sessionRetriever = require('./helpers/middlewares/session-retriever')(sessions) */

const app = express()

app.set('view engine', 'pug')
app.set('views', 'components')

app.use(express.static('public'))

app.use(session({
    store: new FileStore,
    secret: 'a super secret thing',
    saveUninitialized: true,
    resave: true
}))

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.send(View({ body: Landing({ register: '/register', login: '/login' }) }))
})

app.get('/register', (req, res) => {
   // res.send(View({ body: Register({ path: '/register' }) })) 
   res.render('register', { path: '/register' }) //'register' pinta el componente, path: indicio el comportamiento
})

app.post('/register', formBodyParser, (req, res) => {
    const { body: { name, surname, email, password } } = req
 
    try {
        registerUser(name, surname, email, password)
            .then(() => res.redirect('/'))
            // .catch(({ message }) => res.send(View({ body: Register({ path: '/register', error: message }) })))
            .catch(({ message }) => res.render('register', { path: '/register', error: message }))
    } catch ({ message }) {
        //res.send(View({ body: Register({ path: '/register', error: message }) }))
        res.render('register', { path: '/register', error: message })
    }
})

app.get('/login', (req, res) => {
    // res.send(View({ body: Login({ path: '/login' }) }))
    res.render('login', { path: '/login' })
})

app.post('/login', formBodyParser, (req, res) => {
    const { session, body: { email, password } } = req

    try {
        authenticateUser(email, password)
            .then(credentials => {

                const { id, token } = credentials

                session.userId = id
                session.token = token

                session.save(() => res.redirect('/search'))
            })
            .catch(({ message }) => {
                //res.send(View({ body: Login({ path: '/login', error: message }) }))
                res.render('login', { path: '/login', error: message })
        })
    } catch ({ message }) {
        //res.send(View({ body: Login({ path: '/login', error: message }) }))
        res.render('login', { path: '/login', error: message })
    }
})

app.get('/search', (req, res) => {
    try {
        const { session, query: { q: query } } = req

        if (!session) return res.redirect('/')

        const { userId: id, token } = session

        if (!token) return res.redirect('/')

        let name

        retrieveUser(id, token)
            .then(user => {

                name = user.name

                if (!query) return res.render('search', { path: '/search', name, logout: '/logout', favsPath: '/favorites' })
                                      // res.send(View({ body: Search({ path: '/search', name, logout: '/logout' }) }))

                                      // res.send(View({ body: Login({ path: '/login' }) }))
                                      // res.render('login', { path: '/login' })


                
                return searchDucks(id, token, query)
                .then(ducks => {

                    session.query = query
                    session.view = 'search'
                    
                    session.save(() => res.render('search', { path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks', favsPath: '/favorites'  } ))
                    //session.save(() => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks' }) })))

                })
            })
            .catch(({ message }) => res.render('search', { path: '/search', query, name, logout: '/logout', favsPath: '/favorites', error: message }))
            //res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) })))
    } catch ({ message }) { 
        res.render('search', { path: '/search', query, name, logout: '/logout', favsPath: '/favorites', error: message })
        //res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
    }

})


app.post('/logout', (req, res) => {
    //res.setHeader('set-cookie', 'id=""; expires=Thu, 01 Jan 1970 00:00:00 GMT')

    const { session } = req

    session.destroy(() => {
        res.clearCookie('connect.sid', { path: '/' })
        // res.setHeader('set-cookie', 'connect.sid=""; expires=Thu, 01 Jan 1970 00:00:00 GMT')

        res.redirect('/')
    })

})

app.post('/fav', formBodyParser, (req, res) => {
    try {
        const { session, body: { id: duckId }, headers: { referer } } = req

        if (!session) return res.redirect('/')

        const { userId: id, token } = session 

        if (!token) return res.redirect('/')



        toggleFavDuck(id, token, duckId)
            .then(() => res.redirect(referer))
            .catch(({ message }) => 
                //res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message})}) ))
                res.render('search', { path: '/search',query, name, logout: '/logout', error: message }) 
            
            )} catch ({ message }) {
                //res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message})}) ) 
                res.render('search', { path: '/search', query, name, logout: '/logout', error: message }) 
        }
})

app.get('/ducks/:id', (req, res) => {
    try {
        const { session, params: { id: duckId } } = req

        if (!session) return res.redirect('/')

        const { userId: id, token, view, query } = session

        if (!token) return res.redirect('/')


        retrieveDuck(id, token, duckId)
            .then(duck => {
                //res.send(View({ body: Detail({ item: duck, backPath: view === 'search' ? `/search?=${query}` : '/', favPath: '/fav' }) }))

                const backPath = view === 'search' ? `/search?q=${query}` : (view === 'favorites' ? '/favorites' : '/')

                res.render('detail', { item: duck, backPath, favPath: '/fav'})

            })
            .catch(({ message }) => res.render('search', { path: '/search', query, name, logout: '/logout', error: message }))
                //res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) })))  
    } catch ({ message }){ res.render('search', { path: '/search', query, name, logout: '/logout', error: message })
                    //res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message })}))

            }
    
})


app.get('/favorites', (req, res) => {
    try {
        const { session } = req // req.session = session

        if (!session) return res.redirect('/')

        const { userId: id, token, query } = session //session.userId = id, session.token = token, session.query = query

        if (!token) return res.redirect('/')

        retrieveFavDucks(id, token)
            .then(favs => {
                session.view = 'favorites'

                session.save(() =>
                    res.render('favorites', { results: favs, backPath: query ? `/search?q=${query}` : '/search', favPath: '/fav', detailPath: '/ducks' })
                )
            })
            .catch(({ message }) => //res.send(`TODO error handling for: ${error}`)))
                                  res.render('search', { path: '/search', error: message }))
    } catch ({ message }) {
        // res.send(`TODO error handling for: ${error}`)
        res.render('search', { path: '/search', error: message})
       
    }
})

app.listen(port, () => console.log(`server running on port ${port}`))