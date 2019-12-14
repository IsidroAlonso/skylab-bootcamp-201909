
const call = require ('../../helpers/call')


module.exports = function (id, token, duckId) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
    if (!id.trim().length) throw new ContentError('id is empty or blank')
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string')
    if (!token.trim().length) throw new ContentError('token is empty or blank')
    if (typeof duckId !== 'string') throw new TypeError(duckId + ' is not a string')
    if (!duckId.trim().length) throw new ContentError('duck id is empty or blank')

    return new Promise ((resolve, reject) => call('GET', `https://duckling-api.herokuapp.com/api/ducks/${duckId}`,undefined,  undefined, result => {
        if (result.error) return reject(new Error(result.error))

        call('GET', `https://skylabcoders.herokuapp.com/api/user/${id}`, token, undefined, user => {
            if (user.error) return reject(new Error(user.error))

            const { data: { favs = [] } } = user

            result.isFav = favs.includes(result.id)

            resolve(result)
        })
    }))
}