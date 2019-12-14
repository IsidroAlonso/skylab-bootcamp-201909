function retrieveFavDucks(userId, userToken, callback) {
    if (typeof userId !== 'string') throw new TypeError(userId + ' is not a string')
    if (typeof userToken !== 'string') throw new TypeError(userToken + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')




    call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, userToken, undefined, (result) => {
        if (result.error) {
            callback(new Error(result.error));
        } else {
            (result.data.favDucks) ? callback(undefined, result.data.favDucks): callback(undefined, []);
        }
    });



}