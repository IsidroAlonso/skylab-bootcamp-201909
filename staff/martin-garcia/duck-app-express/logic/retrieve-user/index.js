const call = require('../../helpers/call')
const validate = require('../../utils/validate')

module.exports = function retrieveUser(id, token) {
    validate.string(id)
    validate.string.notVoid("id", id)
    validate.string(token)
    validate.string.notVoid('token', token)

    const url = 'https://skylabcoders.herokuapp.com/api/user/' + id;
    body = undefined;

    return new Promise((resolve, reject) => {
        call('GET', url, token, body, result => {
            result.error ? reject(new Error(result.error)) : resolve(result);
        })
    })
}