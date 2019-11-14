const validate = require('../../utils/validate')
const tasks = require('../../data/tasks')()
const uuid = require('uuid/v4')
const { ConflictError } = require('../../utils/errors')

module.exports = function (id, user, title, description, status, date) {
    validate.string(id)
    validate.string.notVoid('id', id)
    validate.string(user)
    validate.string.notVoid('user', user)
    validate.string(title)
    validate.string.notVoid('title', title)
    validate.string(description)
    validate.string.notVoid('description', description)
    validate.string(status)
    validate.string.notVoid('status', status)
    validate.string(date)
    validate.string.notVoid('date', date)

    return new Promise((resolve, reject) => {
        const task = tasks.data.find(task => task.id === id)

        if (task) return reject(new ConflictError(`this task ${id} already exists`))

        const id = uuid()

        tasks.data.push({ id, user, title, description, status, date })

        tasks.persist().then(resolve).catch(reject)
    })
}