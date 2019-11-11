const express = require('express')
const { View, Landing, Register, Login, Search, Detail } = require('./components')
const { registerUser, authenticateUser, retrieveUser, searchDucks, retrieveDuck, toggleFavDuck } = require('./logic')
const { bodyParser, cookieParser } = require('./utils/middlewares')

const { argv: [, , port = 8080] } = process

const sessions = {}

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    // if (cookies !== '') return res.send(View({ body: Search({ path: '/search' }) }))
    res.send(View({ body: Landing({ register: '/register', login: '/login' }) }))
})

app.get('/register', (req, res) => {
    // if (sessions === '') return res.send(View({ body: Search({ path: '/search' }) }))
    res.send(View({ body: Register({ path: '/register', landing: '/' }) }))
})

app.post('/register', bodyParser, (req, res) => {
    const { body: { name, surname, email, password } } = req

    try {
        registerUser(name, surname, email, password)
            .then(() => res.redirect('/'))
            .catch(({ message }) => res.send(View({ body: Register({ path: '/register', error: message, landing: '/' }) })))
    } catch ({ message }) {
        res.send(View({ body: Register({ path: '/register', error: message, landing: '/' }) }))
    }
})

app.get('/login', (req, res) => {
    // if (sessions === '') return res.send(View({ body: Search({ path: '/search' }) }))
    res.send(View({ body: Login({ path: '/login', landing: '/' }) }))
})

app.post('/login', bodyParser, (req, res) => {
    const { body: { email, password } } = req

    try {
        authenticateUser(email, password)
            .then(credentials => {
                const { id, token } = credentials

                sessions[id] = { token }

                res.setHeader('set-cookie', `id=${id}`)

                res.redirect('/search')
            })
            .catch(({ message }) => {
                res.send(View({ body: Login({ path: '/login', error: message, landing: '/' }) }))
            })
    } catch ({ message }) {
        res.send(View({ body: Login({ path: '/login', error: message, landing: '/' }) }))
    }
})

app.get('/search', cookieParser, (req, res) => {
    try {
        const { cookies: { id }, query: { q: query } } = req

        if (!id) return res.redirect('/')

        const session = sessions[id]

        if (!session) return res.redirect('/')

        const { token } = session

        if (!token) return res.redirect('/')

        let name

        retrieveUser(id, token)
            .then(user => {
                name = user.name

                if (!query) return res.send(View({ body: Search({ path: '/search', name, logout: '/logout' }) }))

                session.query = query

                return searchDucks(id, token, query)
                    .then(ducks => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks' }) })))
            })
            .catch(({ message }) => res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) })))
    } catch ({ message }) {
        res.send(View({ body: Search({ path: '/search', query, name, logout: '/logout', error: message }) }))
    }
})

app.post('/logout', cookieParser, (req, res) => {
    res.setHeader('set-cookie', 'id=""; expires=Thu, 01 Jan 1970 00:00:00 GMT')

    const { cookies: { id } } = req

    if (!id) return res.redirect('/')

    delete sessions[id]

    res.redirect('/')
})

app.post('/fav', cookieParser, bodyParser, (req, res) => {
    try {
        const { cookies: { id }, body: { id: duckId }, headers: {referer} } = req

        if (!id) return res.redirect('/')

        const session = sessions[id]

        if (!session) return res.redirect('/')

        const { token, query } = session

        if (!token) return res.redirect('/')

        // if (View({ body: Search({ path: '/search', query, name, logout: '/logout', results: ducks, favPath: '/fav', detailPath: '/ducks' }) }))
            toggleFavDuck(id, token, duckId)
                .then(() => res.redirect(referer))//(`/search?q=${query}`))
                .catch(({ message }) => {
                    res.send({ error: message })
                })
        // if (View({ body: Detail({ item: duck, favPath: '/fav', search: '/search' }) }))
        //     toggleFavDuck(id, token, duckId)
        //         .then(() => res.redirect(`/ducks/:duckId`))
        //         .catch(({ message }) => {
        //             res.send({ error: message })
        //         })
    } catch ({ message }) {
        res.send({ error: message })
    }
})

app.get('/ducks/:duckId', cookieParser, (req, res) => { //cualquier cosa que esté dp de los : se accede mediante req.params
    try {
        const { params: { duckId } } = req
        const { cookies: { id } } = req
        if (!id) return res.redirect('/')
        const session = sessions[id]
        if (!session) return res.redirect('/')
        const { token } = session
        if (!token) return res.redirect('/')

        retrieveDuck(id, token, duckId)
            .then(duck => res.send(View({ body: Detail({ item: duck, favPath: '/fav', search: '/search' }) })))
            .catch(({ message }) => res.send({ error: message }))
    } catch ({ message }) {
        res.send({ error: message })
    }

})


// app.get('/ducks/:duckId', cookieParser, bodyParser, (req, res) => {
//     try{
//         const { params: { duckId } } = req

//         // if (!duckId) return res.redirect('/')

//         const { cookies: { id } } = req

//         if (!id) return res.redirect('/')

//         const session = sessions[id]

//         if (!session) return res.redirect('/')

//         const { token } = session

//         if (!token) return res.redirect('/')

//         // retrieveUser(id, token)
//         //     .then(user => {
//         //         name = user.name

//         //         return 
//                 retrieveDuck(/*id, token, */undefined, undefined, duckId)
//                     .then(duck => res.send(View({ body: Detail({ item: duck/*, favPath: '/fav', search: '/search'*/ }) })))
//                     .catch(res.send('error1'))//(({ message }) => res.send(({ error: message })))
//             // })
//     } catch ({ message })  {
//         res.send('error2')
//     }



// })

app.listen(port, () => console.log(`server running on port ${port}`))

