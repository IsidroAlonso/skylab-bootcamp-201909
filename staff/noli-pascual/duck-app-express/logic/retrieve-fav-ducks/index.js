const call = require('../../helpers/call')
const validate = require('../../utils/validate')

module.exports = function (id, token) {
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(token)
    validate.string.notVoid('token', token)

    return new Promise((resolve, reject) => {
        call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
            if (result.error) reject(new Error(result.error))
            else {
                const { data: { favs = [] } } = result
                const calls = favs.map(fav => new Promise((resolve, reject) =>
                    call('GET', undefined, `https://duckling-api.herokuapp.com/api/ducks/${fav}`, undefined, result2 => {
                        if (result2.error) resolve()
                        else {
                            result2.image = result2.imageUrl
                            delete result2.imageUrl
                            result2.isFav = true
                            resolve(result2)
                        }
                    })
                ))

                Promise.all(calls)
                    .then(favs => favs.filter(fav => !!fav))
                    .then(favs => resolve(favs))
            }
        })
    })
}