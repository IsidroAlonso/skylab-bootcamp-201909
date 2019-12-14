
const call = require('../../helpers/call')
const validate = require('../../utils/validate')

module.exports = function (id, token) {
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(token)
    validate.string.notVoid('token', token)

    return new Promise((resolve, reject) => {
        call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, token, undefined, user => {
            if (user.error) reject(new Error(user.error))
            else {
                const { favs = [] } = user.data

                const calls = favs.map(duckId => new Promise((resolve, reject) =>
                    call('GET', `https://duckling-api.herokuapp.com/api/ducks/${duckId}`, undefined, undefined, result => {
                        if (result.error) resolve()
                        else {
                            result.isFav = true
                            resolve(result)
                        }
                    })
                ))

                Promise.all(calls)
                    .then(ducks => ducks.filter(duck => !!duck))
                    .then(ducks => resolve(ducks))
            }
        })
    })
}





/*                 Promise.all(favs.filter(duckId => {
                    if (typeof duckId === 'string') {
                        return new Promise((resolve,reject) => {
                            call('GET', `https://duckling-api.herokuapp.com/api/ducks/${duckId}`, undefined, undefined, result => {
                                if (result.error) reject(error = new Error(result.error))
                                else {
                                    result.isFav = true
                                    resolve(result)
                                }
                            })
                        })
                    }
                }))
                .then (results => {
                    resolve(results)
                }) */

/*                 resolve(favs.forEach(duck => {
                    if (typeof duck === 'string')
                        call('GET', `https://duckling-api.herokuapp.com/api/ducks/${duck}`, undefined, undefined, result => {
                            if (result.error) reject(error = new Error(result.error))
                            else {
                                result.isFav = true
                                favDucksResult.push(result)
                                //callback(favDucksResult)
                            }
                        })
                    }))
 */