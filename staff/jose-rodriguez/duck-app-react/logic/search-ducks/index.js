function searchDucks(query, id, token, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    call('GET', undefined, query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search', undefined, function (result) {
        if (result.error) {

            callback(new Error(result.error))
        }
        else {

            call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, user => {

                if (user.error) callback(new Error(user.error))

                const { favs } = user.data


                result.map(duck => { // normalize image url to image
                    duck.image = duck.imageUrl

                    delete duck.imageUrl
                    duck.isFav = favs.includes(duck.id)
                })

                callback(undefined, result)

            })
        }
    })
}