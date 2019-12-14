const call = require('../../helpers/call')
const { ContentError } = require('../../utils/errors')
const validate = require('../../utils/validate')


module.exports = function registUser(name, lastName, mail, password, age) {
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.string(lastName)
    validate.string.notVoid('lastName', lastName)
    validate.string(mail)
    validate.string.notVoid('mail', mail)
    validate.string(password)
    validate.string.notVoid('password', password)

    return new Promise((resolve, reject) => {
        call('POST', 'https://skylabcoders.herokuapp.com/api/user', undefined, { 'username': mail, 'password': password, 'name': name, 'lastName': lastName, 'age': age.toString(), favDucks: [] }, result => {
            result.error ? reject(new Error(result.error)) : resolve();
        })
    })

}