require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const createTask = require('.')
const { random } = Math
const { database, models: { User, Task } } = require('tasks-data')

describe('logic - create task', () => {
    before(() => database.connect(DB_URL_TEST))

    let id, name, surname, email, username, password, title, description

    beforeEach(async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        await Promise.all([User.deleteMany(), Task.deleteMany()])

        const user = await User.create({ name, surname, email, username, password })

        id = user.id

        title = `title-${random()}`
        description = `description-${random()}`
    })

    it('should succeed on correct user and task data', async () => {
        const taskId = await createTask(id, title, description)

        expect(taskId).toBeDefined()
        expect(taskId).toBe('string')
        expect(taskId).toBeGreaterThan(0)

        const task = await Task.findById(taskId)

        expect(task).toBeDefined()
        expect(task.user.toString()).toBe(id)
        expect(task.title).toBe(title)
        expect(task.description).toBe(description)
        expect(task.status).toBe('TODO')
        expect(task.date).toBeDefined()
        expect(task.date).toBeInstanceOf(Date)
    })

    // TODO other test cases

    after(() => Promise.all([User.deleteMany(), Task.deleteMany()]).then(database.disconnect))
})