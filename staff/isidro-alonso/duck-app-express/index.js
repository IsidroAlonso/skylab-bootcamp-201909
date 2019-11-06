const express = require('express')
const Cabecera = require('./helpers/cabecera.js')
const Landing = require('./components/landing')
const Register = require('./components/register')

const { argv: [, , port = 8080] } = process
// process.argv[2] = 8080

const app = express()

app.use(express.static('public')) // todo lo que pones aqui se añadirá por defecto sin llamarlo (estilos, favicon...)

app.get('/', (req, res) => {
    res.send(`${Cabecera(Landing())}`)
})

app.get('/register', (req, res) => {
    res.send(`${Cabecera(Register())}`)
})

app.listen(port, () => console.log(`server running on port ${port}`))