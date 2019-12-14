const call = require('../../helpers/call')

module.exports = function (id, token) {  

    if (typeof id !== 'string') throw new TypeError(id +  ' is not a string');
    if (typeof id !== 'string') throw new TypeError(id +  ' is not a string');

    return new Promise ((resolve,reject) => {
        call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, token, undefined, result => {
            result.error ? reject(new Error(result.error)) : resolve(result.data)
        })
    })
}