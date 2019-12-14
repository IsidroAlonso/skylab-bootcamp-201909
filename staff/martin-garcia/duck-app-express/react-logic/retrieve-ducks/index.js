function retrieveDucks(ducks, userId, tokenId, callback) {

    if (typeof ducks !== 'object') throw new TypeError(query + ' is not an array');
    if (typeof userId !== 'string') throw new TypeError(userId + ' is not a string');
    if (typeof tokenId !== 'string') throw new TypeError(tokenId + ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');




    call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, tokenId, undefined, (favDucks) => {
        if (favDucks.error) return callback(new Error(favDucks.error));
        favs = favDucks.data.favDucks
        if (favs) {
            ducks.forEach(element => {
                (favs.includes(element.id)) ? element.isFav = 'true': element.isFav = 'false'
            });
            callback(undefined, ducks)
        } else {
            callback(undefined, ducks)
        }

    });


}