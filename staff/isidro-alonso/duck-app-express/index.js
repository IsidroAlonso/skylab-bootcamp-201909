const express = require('express')
const View = require('./components/view')
const Landing = require('./components/landing')
const Register = require('./components/register')
const Login = require('./components/login')
const querystring = require('querystring')
const registerUser = require('./logic/register-user')
const authenticateUser = require('./logic/authenticate-user')

const { argv: [, , port = 8080] } = process // process.argv[2] = 8080

const app = express()

app.use(express.static('public')) // todo lo que pones aqui se añadirá por defecto sin llamarlo (estilos, favicon...)

app.get('/', (req, res) => {
    res.send(View({ body: Landing({ register: '/register', login: '/login' }) }))
})

app.get('/register', (req, res) => {
    res.send(View({ body: Register({ landing: '/' }) }))
})

app.post('/register', (req, res) => {
    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        const { name, surname, email, password } = querystring.parse(content)

        try {
            registerUser(name, surname, email, password, error => {
                if (error) res.send('error chungo!')
                else res.send('depotamare')
            })
        } catch(error) {
            // TODO handling
        }
    })
}) 

app.get('/login', (req, res) => {
    res.send(View({ body: Login({ landing: '/' }) }))
})

app.post('/login', (req, res) => {
    let content = ''

    req.on('data', chunk => content += chunk)

    req.on('end', () => {
        const { email, password } = querystring.parse(content)

        try {
            authenticateUser(email, password, error => { 
                if (error) res.send('error chungo!')
                else res.send('depotamare')
            })
        } catch(error) {
            // TODO handling
        }
    })
}) 

app.listen(port, () => console.log(`server running on port ${port}`))