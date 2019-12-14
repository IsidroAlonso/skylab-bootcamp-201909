function toggleFavDuck(userId, userToken, duckId, callback) {

    call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, userToken, undefined, (result) => {
        if (result.error) {
            callback(new Error(result.error));
        } else {
            debugger
            if (result.data.favDucks) { favArray = result.data.favDucks } else { let favArray = [] }
            favArray.includes(duckId) ? favArray.splice(favArray.indexOf(duckId), 1) : favArray.push(duckId)

            const body = { 'favDucks': favArray }

            call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, userToken, body, (result) => {

                if (result.error) {
                    callback(new Error(result.error));
                } else {
                    callback(result)
                }
            });

        }
    });


}