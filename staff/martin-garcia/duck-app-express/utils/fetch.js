const https = require('https')
const url = require('url')

module.exports = function fetch(method, _url, headers, body, callback) {
    const { hostname, pathname, search } = new URL(_url)
    const path = `${pathname}${search}`
    const request = https.request({ method, hostname, headers, path }, callback)

    body && request.write(JSON.stringify(body))
    request.end()
}