function retrieveDuck(id, callback) {
    call('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id, callback);
}