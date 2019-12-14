const call = require('../../helpers/call')
const validate = require('../../utils/validate')

module.exports = function retrieveWatchlistMovies(userId, userToken) {
    validate.string(userId)
    validate.string.notVoid('userId', userId)
    validate.string(userToken)
    validate.string.notVoid('userToken', userToken)

    return new Promise((resolve, reject) => {
        call('GET', `https://skylabcoders.herokuapp.com/api/user/${userId}`, userToken, undefined, result => {
            if (result.error) {
                reject(new Error(result.error))
            } else {
                if (result.data.favDucks && result.data.favDucks.length) {
                    const favArray = result.data.favDucks
                    let favDucks = []
                    let counter = 0

                    favArray.forEach(duckId => {
                        call('GET', `https://duckling-api.herokuapp.com/api/ducks/${duckId}`, undefined, undefined, duck => {
                            if (duck.error) return reject(new Error(duck.error))
                            duck.isFav = "true"
                            favDucks.push(duck)
                            if (++counter === favArray.length) return resolve(favDucks)
                        })
                    })
                } else { resolve([]) }
            }
        })
    })
}