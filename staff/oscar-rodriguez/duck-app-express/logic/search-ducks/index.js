const call = require ('../../helpers/call')


module.exports = function (id, token, query) {
    if (typeof id !== 'string') throw new TypeError(id +  ' is not a string');
    if (typeof query !== 'string') throw new TypeError(query +  ' is not a string');
    

    return new Promise ((resolve, reject) => {
        call('GET', query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search', undefined, undefined, function(result) {
            if (result.error ) return  reject(new Error(result.error))
                call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, token, undefined, user => {
                    if (user.error ) return reject(new Error(user.error))
                    const {favs = []} = user.data
                    result.map (duck => {
                        favs.includes (duck.id) ? duck.isFav = true : duck.isFav = false
                        return duck
                    })
                    resolve(result)
                })          
        })
    })
}