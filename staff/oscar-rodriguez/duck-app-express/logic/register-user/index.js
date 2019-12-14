const call = require('../../helpers/call')

module.exports = function(name, surname, email, password) {
    if (typeof name !== 'string') throw new TypeError(name + ' is not a string')
    if (!name.trim().length) throw new TypeError('name is empty or blank')
    if (typeof surname !== 'string') throw new TypeError(surname + ' is not a string')
    if (!surname.trim().length) throw new TypeError('surname is empty or blank')
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!email.trim().length) throw new TypeError('e-mail is empty or blank')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new TypeError('password is empty or blank')


    return new Promise ((resolve, reject) => call('POST', 'https://skylabcoders.herokuapp.com/api/user', undefined, { name, surname, username: email, password }, result => {
        result.error ? reject(new Error(result.error)) : resolve();
    }))
}