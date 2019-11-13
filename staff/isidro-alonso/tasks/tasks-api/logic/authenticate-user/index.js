const validate = require('../../utils/validate')
const users = require('../../data/users.json')
const fs = require('fs')
const path = require('path')
const { ContentError } = require('../../utils/errors')

module.exports = function (email, password) {
    validate.string(email)
    validate.string.notVoid('e-mail', email)
    validate.string(password)
    validate.string.notVoid('password', password)

    return new Promise((resolve, reject) => {
        // call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
        //     result.error ? reject(new Error(result.error)) : resolve(result.data)
        // })

        fs.readFile(path.join(__dirname, '../../data/users.json'), JSON.stringify(users), error => error? reject(error) : resolve())
    })
}