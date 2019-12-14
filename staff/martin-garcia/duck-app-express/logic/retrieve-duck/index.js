const validate = require('../../utils/validate')
const call = require('../../helpers/call')

module.exports = function retrieveDuck(id) {
    validate.string(id)
    validate.string.notVoid('id', id)

    return new Promise((resolve, reject) => {
        call('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id, undefined, undefined, function(result) {
            result.error ? reject(result) : resolve(result);
        })
    })
}