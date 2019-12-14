const fetch = require('../utils/fetch')

module.exports = function call(method, url, token, body, callback) {
    let headers = {};
    if (body) headers['Content-Type'] = 'application/json;charset=UTF-8';
    if (token) headers['Authorization'] = 'Bearer ' + token;
    fetch(method, url, headers, body, response => {
        let content = ''
        response.on('data', chunk => content += chunk)

        response.on('end', () => callback(JSON.parse(content)))
    })
}