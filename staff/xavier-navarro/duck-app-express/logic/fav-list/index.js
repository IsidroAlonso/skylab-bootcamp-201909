const call = require('../../helpers/call')
const validate = require('../../utils/validate')

module.exports = function (id, token) {
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(token)
    validate.string.notVoid('token', token)
    
    return new Promise((resolve, reject) => {
        call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, dataUser => {
            if(dataUser.error) return reject(new Error(dataUser.error))
            resolve(dataUser.data.favs)
        })
    })
    .then(
        favDucks => Promise.all(favDucks.map((duckId) => {
            return new Promise((resolve, reject) => {
                call('GET', undefined, `https://duckling-api.herokuapp.com/api/ducks/${duckId}`, undefined, result => {
                    if (result.error) return resolve()
                        result.image = result.imageUrl
                        delete result.imageUrl
                        result.isFav = true
                        
                        resolve(result)
                })
            })
        })).then(results => results.filter(err => !!err)))
}