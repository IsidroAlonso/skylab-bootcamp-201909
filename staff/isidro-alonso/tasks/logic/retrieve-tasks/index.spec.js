const { expect } = require('chai')
const { random } = Math
const users = require('../../data/users')('test')
const tasks = require('../../data/tasks')('test')
const retrieveUser = require('.')
const uuid = require('uuid/v4')
const { NotFoundError } = require('../../utils/errors')

describe.only('logic - retrieve task', () => {
    before(() => Promise.all([users.load(), tasks.load()]))

    let id, name, surname, email, username, password, title, description

    beforeEach(() => {
        id = uuid()
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        users.data.push({ id, name, surname, email, username, password })

        title = `title-${random()}`
        description = `description-${random()}`
    })
    //
    // before(() => tasks.load())

    // let id, title, description, status, date

    // beforeEach(() => {
    //     id = uuid()
    //     title = `title-${random()}`
    //     description = `description-${random()}`
    //     status = `status-${random()}`
    //     date = `date-${random()}`

    //     tasks.data.push({ id, title, description, status, date })
    // })

    it('should succeed on correct user id', (done) => {
        retrieveUser(id)
            .then(task => {
                expect(task).to.exist
                expect(task.id).to.equal(id)
                expect(task.title).to.equal(title)
                expect(task.description).to.equal(description)
                // expect(task.status).to.equal(status)
                // expect(task.date).to.equal(date)
            })
            done()
        })

})