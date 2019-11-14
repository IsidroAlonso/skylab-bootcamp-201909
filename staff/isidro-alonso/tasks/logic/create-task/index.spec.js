const { expect } = require('chai')
const tasks = require('../../data/tasks')() // poner 'test' no funcona
const createTask = require('.')
const { ContentError } = require('../../utils/errors')
const { random } = Math

describe.only('logic - create task', () => {
    before(() => tasks.load())

    let id, user, title, description, status, date

    beforeEach(() => {
        id = `ID: ${random()}`
        user = `User: ${random()}`
        title = `Task Title: ${random()}`
        description = `Description: ${random()}`
        status = `i.e. TODO or DONE? ${random()}`
        date = `Date: ${random()}`
    })

    it('should create a new task', () =>
        createTask(id, user, title, description, status, date)
            .then(response => {
                expect(response).to.be.undefined

                const task = tasks.data.find(task => task.id === id)

                expect(task).to.exist

                expect(task.id).to.equal(id)
                expect(task.user).to.equal(user)
                expect(task.title).to.equal(title)
                expect(task.description).to.equal(description)
                expect(task.status).to.equal(status)
                expect(task.date).to.equal(date)

                const { id } = task
                expect(id).to.exist
                expect(id).to.be.a('string')
                expect(id).to.have.length.greaterThan(0)
            })
    )
})