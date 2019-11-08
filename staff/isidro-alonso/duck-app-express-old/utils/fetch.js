const https = require('https')

module.exports = function (method, _url, headers, body, callback) {

    const { hostname, pathname } = new URL(_url)

    const request = https.request({ method, hostname, headers, path: pathname }, callback)

    body && request.write(body)
    request.end()
}