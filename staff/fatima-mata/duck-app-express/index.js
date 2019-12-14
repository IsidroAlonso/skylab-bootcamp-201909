const express = require('express')
// vistas
const { View, Landing, Register, Login, Search, Detail } = require('./components')
// lógica
const { registerUser, authenticateUser, retrieveUser, searchDucks, toggleFavDuck, retrieveDuck, retrieveFavDucks } = require('./logic')
// librerias
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)

const { argv: [, , port = 8080] } = process

const app = express()

app.set('view engine', 'pug')
app.set('views', 'components')

app.use(express.static('public'))

app.use(session({
    store: new FileStore({}),
    secret: 'a super secret thing',
    saveUninitialized: true,
    resave: true
}))

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.render('landing', {register: '/register', login: '/login'} )
    //res.send(View({ body: Landing({register: '/register', login: '/login'}) }))
} )


app.get('/register', (req, res) => {
    res.render('register', {path: '/register'})
    //res.send(View({ body: Register( { path: '/register' }) }))
})

app.post('/register', formBodyParser, (req, res) => {
        const { body: {name, surname, email, password} } = req
        try {
            registerUser(name, surname, email, password)
                .then(() => res.render('login',  {path: '/login'}) /*res.redirect('/login')*/)
                .catch(({message}) =>  res.render('register', {path: '/register', error: message} ) /*res.send(View({ body: Register( { path: '/register', error: message} )})) */)
                
        } catch({message}) {
            res.render('register', {path: '/register', error: message})
            /*res.send(View({ body: Register({ path: '/register', error: message})}))*/
        }
}) 

app.get('/login', (req, res) => {
    res.render('login', {path: '/login'})
    //res.send(View({ body: Login({ path: '/login' }) }))
})


app.post('/login', formBodyParser, (req, res) => {

        const { session, body:{ email, password} } = req
        try{
            authenticateUser(email, password)
                .then((credentials) => { 
                    const { id, token } = credentials 

                    session.userId = id
                    session.token = token
                    
                    session.save(() => res.redirect('/search'))
                })
                .catch(({message}) => {
                    res.render('login', { path: '/login', error: message })
                    //res.send(View({ body: Login({ path: '/login', error: message }) }))
                })
        }catch({message}){
            res.render('login', { path: '/login', error: message })
            //res.send(View({ body: Login({ path: '/login', error: error.message})}))
        }
})

app.get('/search', (req, res) => {
    try {
        const { session, query: { q: query } } = req

        if (!session) return  res.render('login', { path: '/login', error: message }) /*res.redirect('/login')*/

        const { userId: id, token } = session

        if (!token) return res.render('login', { path: '/login', error: message }) /*res.redirect('/login')*/

        let name

        retrieveUser(id, token)
            .then(user => {
                name = user.name

                if (!query) return res.render('search', {path: '/search', name, logout: '/logout', myfavs: '/myfavs' }) /*res.send(View({ body: Search({ path: '/search', name, logout: '/logout', myfavs: '/myfavs' }) }))*/

                return searchDucks(id, token, query)
                .then(ducks => {
                    session.query = query
                    session.view = 'search'

                    session.save(() => res.render('search', { path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks', myfavs: '/myfavs' }) /*res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks', myfavs: '/myfavs' }) }))*/)
                    })
            })
            .catch(({ message }) => res.render('search', { path: '/search', query, name, logout: '/logout', error: message }) /*res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))*/)
    } catch ({ message }) {
        res.render('search', { path: '/search', query, name, logout: '/logout', error: message })
        /*res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))*/
    }
})
   
app.post('/logout', (req, res) => {
    const { session } = req 

    session.destroy(() => {
        res.clearCookie('connect.sid', { path: '/'})

        res.redirect('/')
    })
})

app.post('/fav', formBodyParser, (req, res) => {
    try {
        const { session, body: { id: duckId }, headers: { referer } } = req
        
        if (!session) return res.render('landing', {register: '/register', login: '/login'} ) /*res.redirect('/')*/

        const { userId: id, token } = session

        if (!token) return res.render('landing', {register: '/register', login: '/login'} ) /*res.redirect('/')*/

        toggleFavDuck(id, token, duckId)
            .then(() => res.redirect(referer))
            .catch(({ message }) => {
                res.send('TODO error handling1')
            })
    } catch ({ message }) {
        res.send('TODO error handling2')
    }
})

app.get('/ducks/:id', (req, res) => {
    try{

        const { session, params: { id: duckId } } = req          
        //if(path) res.clearCookie('path') 
        if(!session) return res.render('landing', {register: '/register', login: '/login'} ) /*res.redirect('/')*/

        const { userId: id, token, view, query } = session

        if (!token) return res.render('landing', {register: '/register', login: '/login'} ) /*res.redirect('/')*/

        retrieveDuck(id, token, duckId)
            .then(duck => { 
                res.render('detail', { item: duck, favPath: '/fav', backPath: view === 'search' ? `/search?q=${query}` : '/myfavs' })
                /*res.send(View({ body: Detail( { item: duck, favPath: '/fav', backPath: view === 'search' ? `/search?q=${query}` : '/myfavs' })}))*/
            })
            .catch(({ error }) => res.send(error))
    

    } catch(error){
        res.send('TODO error handling2')
    }
})

// app.get('/myfavs',(req, res) => {
//     try{
//         const { session, query: { q: query } } = req

//         if (!session) return res.redirect('/login')

//         const { userId: id, token } = session

//         if (!token) return res.redirect('/login')

//         let name
//         debugger
//         retrieveFavDucks(id, token)
//             .then(ducks => {
//                 session.view = 'myfavs'
//                 session.save(() => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks', myfavs: '/myfavs' }) })))
//             })
//             .catch(({ message }) => {
//                 res.send('todo maaal myfavs1')
//             })
//     }catch (error){
//         res.send('TODO maaaal myfavs2')
//     }
// })

app.get('/myfavs', (req, res) => {
    try {
        const { session, query: { q: query } } = req

        if (!session) return res.render('landing', {register: '/register', login: '/login'} ) /*res.redirect('/')*/
        
        const { userId: id, token } = session
        
        if (!token) return res.render('landing', {register: '/register', login: '/login'} ) /*res.redirect('/')*/
        
        let name

        retrieveUser(id, token)
            .then(user => {
                name = user.name

                return retrieveFavDucks(id, token)
                .then(ducks => {
                    
                    session.view = 'myfavs'

                    session.save(() => res.render('search', { path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks', myfavs: '/myfavs' }) /*res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks', myfavs: '/myfavs' }) }))*/)
                })
            })
            .catch(({ message }) => res.render('search', { path: '/search', query, name, logout: '/logout', error: message }) /*res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))*/)
    } catch ({ message }) {
        res.render('search', { path: '/search', query, name, logout: '/logout', error: message })
        /*res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))*/
    }
})

app.listen(port, () => console.log(`server running on port ${port}`))


