const call = require('../../helpers/call')
const { ContentError } = require('../../utils/errors')
const validate = require('../../utils/validate')

module.exports = function logIn(mail, password, callback) {
    validate.string(mail)
    validate.string.notVoid("mail", mail)

    validate.string(password)
    validate.string.notVoid("password", password)

    return new Promise((resolve, reject) => {
        call('POST', 'https://skylabcoders.herokuapp.com/api/auth', undefined, { 'username': mail, 'password': password }, (result) => {
            result.error ? reject(new Error(result.error)) : resolve(result.data)
        })
    })
}