const call = require('../../utils/call')
const { validate } = require('tasks-util')
const { env: { REACT_APP_API_URL: API_URL } } = process

module.exports = function (id, title, description) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    validate.string(title)
    validate.string.notVoid('title', title)

    validate.string(description)
	validate.string.notVoid('description', description)
	
	return (async () => { // falta que llame a usuarios
        const res = await call(`${API_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, title, description })
        })

        if (res.status === 201) return

        throw new Error(JSON.parse(res.body).message)
    })()

    // return (async () => {
    //     const user = await User.findById(id)

    //     if (!user) throw new NotFoundError(`user with id ${id} not found`)

    //     const task = await Task.create({ user: id, title, description })

    //     return task.id
    // })()
}

/*
fetch('http://192.168.0.41:8000/tasks', {
	method: 'POST',
	headers: { 
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGQyYjhlMTllYWQ1ZWFiNDllYzRjZTIiLCJpYXQiOjE1NzQwOTEwMzIsImV4cCI6MTU3NDE3NzQzMn0.Q574vZOvPhAjB6yBtjAhKeCe2MUwDmdE6CRoQdP9Oog',
		'Content-Type': 'application/json' 
	},
	body: JSON.stringify({ title: 'hello world', description: 'blah blah blah' })
})
	.then(res => res.json())
	.then(res => { debugger })
*/