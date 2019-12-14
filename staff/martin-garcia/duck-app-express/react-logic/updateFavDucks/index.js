function updateFavDucks(userId, userToken, favDucks, callback) {
    if (typeof userId !== 'string') throw new TypeError(userId + ' is not a string')
    if (typeof userToken !== 'string') throw new TypeError(userToken + ' is not a string')
    if (!(favDucks instanceof Array)) throw new TypeError(userToken + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    const body = { 'favDucks': favDucks }

    call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, userToken, body, (result) => {

        if (result.error) {
            callback(new Error(result.error));
        } else {
            callback(result)
        }
    });


}