const call = require('../../helpers/call')
const validate = require('../../utils/validate')

module.exports = function(id, token) {
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(token)
    validate.string.notVoid('token', token)

    return new Promise ((resolve, reject) => {
        call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
            if (result.error) return reject(new Error(result.error))
    
            const { data: { favs = [] } } = result
    
            const favoritosArray = favs.map(favduck => new Promise((resolve, reject) => {
                call('GET', undefined, `https://duckling-api.herokuapp.com/api/ducks/${favduck}`, undefined, result2 => {
                    if (result2.error) resolve()
                    
                    resolve(result2)
                })
            }))
            Promise.all(favoritosArray)
                .then(arrFavs => arrFavs.filter(err => !!err))
                .then(favs=> {
                    
                    favs.map(duck => {
                        duck.image = duck.imageUrl
                        delete duck.imageUrl
                        duck.isFav = true

                        //duck.isFav = favs.includes(duck.id)
                    })
                resolve(favs)
                })
        })
    })
}