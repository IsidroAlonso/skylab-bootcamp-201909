const parseCookies = require ('../parsers/parse-cookies')

module.exports = function (req, resp, next ) {
    req.cookies = parseCookies (req)

    next()
}