const parseBody = require ('../parsers/parse-body')

module.exports = function (req, res, next ) {
    parseBody (req, body => {
        req.body = body
        next()
    })  
}