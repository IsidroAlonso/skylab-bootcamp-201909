/* function searchDucks(query, callback) {
    q = query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search';
    call('GET', q, callback);
} */

function searchDucks(query, callback) {
    call('GET', query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search', callback);
}