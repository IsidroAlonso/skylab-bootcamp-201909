const validate = require('../../utils/validate')
const users = require('../../data/users.json')
const fs = require('fs')
const path = require('path')
const { ContentError } = require('../../utils/errors')

module.exports = function(id, token) {
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(token)
    validate.string.notVoid('token', token)

    return new Promise((resolve, reject) => {
        // call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {
        //     result.error ? reject(new Error(result.error)) : resolve(result.data)
        // })
    })
}