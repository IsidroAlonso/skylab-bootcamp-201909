require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const removeTask = require('.')
const { random } = Math
const database = require('../../utils/database')
const { ObjectId } = database

describe.only('logic - remove task', () => {
    let client, users, tasks

    before(() => {
        client = database(DB_URL_TEST)

        return client.connect()
            .then(connection => {
                const db = connection.db()

                users = db.collection('users')
                tasks = db.collection('tasks')
            })
    })

    let id, name, surname, email, username, password, taskId

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        return users.insertOne({ name, surname, email, username, password })
            .then(result => {
                id = result.insertedId.toString()

                // title = `title-${random()}`
                // description = `description-${random()}`
            })

    })

    it('should delete a task', () => {
        removeTask(id, taskId)
        // .then(taskId => {
            // expect(taskId).to.not.exist
            // expect(taskId).to.be.a('string')
            // expect(taskId).to.be(undefined)
            // expect(taskId).to.have.length.greaterThan(0)

            // return tasks.deleteOne({ _id: ObjectId(taskId) })
        // })
        // done()
    })

    after(() => client.close())

})