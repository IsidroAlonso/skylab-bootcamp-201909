const validate = require('./../../utils/validate')
const call = require('../../helpers/call')

module.exports = function toggleFavDuck(userId, userToken, duckId) {
    validate.string(userId)
    validate.string.notVoid("userId", userId)
    validate.string(userToken)
    validate.string.notVoid("userToken", userToken)
    validate.string(duckId)
    validate.string.notVoid("duckId", duckId)

    return new Promise((resolve, reject) => {

        call('GET', `https://skylabcoders.herokuapp.com/api/user/${userId}`, userToken, undefined, (result) => {

            if (result.error) {

                return reject(new Error(result.error));
            } else {
                if (result.data.favDucks) { favArray = result.data.favDucks } else { let favArray = [] }
                favArray.includes(duckId) ? favArray.splice(favArray.indexOf(duckId), 1) : favArray.push(duckId)

                const body = { 'favDucks': favArray }

                call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, userToken, body, (result) => {
                    result.error ? reject(new Error(result.error)) : resolve(result)
                });

            }
        })
    })

}