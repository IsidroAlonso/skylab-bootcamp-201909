const validate = require('../../utils/validate')
const call = require('../../helpers/call')

module.exports = function searchDucks(query, userId, tokenId) {
    validate.string(userId)
    validate.string.notVoid('userId', userId)

    validate.string(tokenId)
    validate.string.notVoid('tokenId', tokenId)

    validate.string(query)


    return new Promise((resolve, reject) => {
        call('GET', query ? `https://duckling-api.herokuapp.com/api/search?q=${query}` : 'https://duckling-api.herokuapp.com/api/search', undefined, undefined, (result) => {
            if (result.error) return reject(new Error(result.error))

            call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, tokenId, undefined, (favDucks) => {
                if (favDucks.error) { return reject(new Error(favDucks.error)) }
                favs = favDucks.data.favDucks
                if (favs) {
                    result.forEach(element => {
                        (favs.includes(element.id)) ? element.isFav = 'true': element.isFav = 'false'
                    });
                }
                resolve(result)

            });


        })
    })

}