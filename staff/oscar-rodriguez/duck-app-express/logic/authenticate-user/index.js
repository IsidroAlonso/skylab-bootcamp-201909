const call = require ('../../helpers/call')
module.exports = function (email, password) {

    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')

    return new Promise ((resolve, reject) => call('POST', 'https://skylabcoders.herokuapp.com/api/auth', undefined, { username: email, password }, result => {
        if (result.error)
            reject(new Error(result.error))
        else {
            const { data: { id, token } } = result
            resolve({ id, token })
        }
    }))
}