const express = require('express')
const View = require('./components/view')
const Landing = require('./components/landing')
const Register = require('./components/register')
const Login = require('./components/login')
const querystring = require('querystring')
const registerUser = require('./logic/register-user')
const authenticateUser = require('./logic/authenticate-user')
const retrieveUser = require('./logic/retrieve-user')
const Search = require('./components/search')
const searchDucks = require('./logic/search-ducks')

const { argv: [, , port = 8080] } = process // process.argv[2] = 8080

const sessions = {}

const app = express()

app.use(express.static('public')) // todo lo que pones aqui se añadirá por defecto sin llamarlo (estilos, favicon...)

app.get('/', (req, res) => {
    res.send(View({ body: Landing({ register: '/register', login: '/login' }) }))
})

app.get('/register', (req, res) => {
    res.send(View({ body: Register({ landing: '/', path: '/register' }) }))
})

app.post('/register', (req, res) => {

    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        const { name, surname, email, password } = querystring.parse(content)

        try {
            registerUser(name, surname, email, password)
                .then(() => res.redirect('/login'))
                .catch(({ message }) => res.send(View({ body: Register({ path: '/register', error: message }) })))
        } catch (error) {
            res.send(View({ body: Register({ path: '/register', error: error.message }) }))
        }
    })
})

app.get('/login', (req, res) => {
    res.send(View({ body: Login({ landing: '/', path: '/login' }) }))
})

app.post('/login', (req, res) => {
    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        const { email, password } = querystring.parse(content)

        try {
            authenticateUser(email, password)
                .then((credentials) => {

                    const { id, token } = credentials

                    sessions[id] = token

                res.setHeader('set-cookie', `id=${id}`)

                res.redirect('/search')
            })

                .catch(({ message }) => res.send(View({ body: Login({ path: '/login', error: message }) })))

        } catch (error) {
            res.send(View({ body: Login({ path: '/login', error: error.message }) }))
        }
    })
})

app.get('/search', (req, res) => {
    try {
        const { headers: { cookie } } = req

        if (!cookie) return res.redirect('/')

        const [, id] = cookie.split('id=')

        const token = sessions[id]

        if (!token) return res.redirect('/')

        retrieveUser(id, token, (error, user) => {

            if (error) return res.send('TODO error handling')

            const { name } = user

            const { query: { q: query } } = req

            if (!query) res.send(View({ body: Search({ path: '/search', name, logout: '/logout' }) }))
            else {
                try {
                    searchDucks(id, token, query, (error, ducks) => {
                        if (error) return res.send('TODO error handling')

                        console.log(ducks)

                        res.send(View({ body: `${Search({ path: '/search', query, name, logout: '/logout' })} ` })) // TODO ${Results({items: ducks})}
                    })
                } catch (error) {
                    // TODO handling
                }
            }
        })
    } catch (error) {
        // TODO handling
    }
})

// app.post('/logout', cookieParser, (req, res) => {
//     res.setHeader('set-cookie', 'id=""; expires=Thu, 01 Jan 1970 00:00:00 GMT')

//     const { cookies: { id } } = req

//     if (!id) return res.redirect('/')

//     delete sessions[id]

//     res.redirect('/')
// })

app.listen(port, () => console.log(`server running on port ${port}`))