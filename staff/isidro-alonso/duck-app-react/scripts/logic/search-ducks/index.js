function searchDucks(id, token, query, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string');
    if (typeof token !== 'string') throw new TypeError(token + ' is not a string');
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    //Favs de un user
    // call('GET',token, 'https://skylabcoders.herokuapp.com/api/user/'+id, undefined, function(result){
    //     const {data:{favs}} = result 
    // });

    //Busca los patos según la barra de búsqueda
    call('GET', undefined, query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search', undefined, function (result) {
        if (result.error)
            callback(new Error(result.error))
        else {
            // const { data: { favs = [] } } = result

            result.map(duck => { // normalize image url to image
                duck.image = duck.imageUrl

                delete duck.imageUrl

                // duck.isFav = favs.includes(duck.id)
            })

            callback(undefined, result)
        }
    });
}