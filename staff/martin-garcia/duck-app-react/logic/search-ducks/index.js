function searchDucks(query, userId, tokenId, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string');
    if (typeof userId !== 'string') throw new TypeError(userId + ' is not a string');
    if (typeof tokenId !== 'string') throw new TypeError(tokenId + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');

    debugger
    call('GET', query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search', undefined, undefined, (result) => {
        if (result.error) {
            new Error(result.error)
        } else {

            call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, tokenId, undefined, (favDucks) => {
                if (favDucks.error) {
                    callback(new Error(favDucks.error));
                } else {
                    favs = favDucks.data.favDucks
                    if (favs) {
                        result.forEach(element => {
                            (favs.includes(element.id)) ? element.isFav = 'true': element.isFav = 'false'
                        });
                        callback(undefined, result)
                    } else {
                        callback(undefined, result)
                    }
                }
            });
        }

    });

}