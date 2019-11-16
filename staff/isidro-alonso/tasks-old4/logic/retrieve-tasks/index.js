const validate = require('../../utils/validate')
const tasks = require('../../data/tasks')()
const uuid = require('uuid/v4')
const { NotFoundError } = require('../../utils/errors')

module.exports = function (id) {
    validate.string(id)
    validate.string.notVoid('id', id)

    return new Promise((resolve, reject) => {
        const task = tasks.data.find(task => task.id === id)

        if (!task) return reject(new NotFoundError(`task with id ${id} not found`))

        task.lastAccess = new Date

        tasks.persist().then(() => {
            const { title, description } = task

            resolve({ id: uuid(), title, description, status: 'TODO', date: new Date })
        })
    })
}