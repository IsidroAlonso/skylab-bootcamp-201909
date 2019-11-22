const call = require('../../utils/call')
const { validate, errors: { ConflictError } } = require('tasks-util')
// const { env: { REACT_APP_API_URL: API_URL } } = process
const API_URL = process.env.REACT_APP_API_URL

module.exports = function (username, title, description, status) {
	validate.string(username)
	validate.string.notVoid('username', username)
	validate.string(title)
	validate.string.notVoid('title', title)
	validate.string(description)
	validate.string.notVoid('description', description)
	validate.string(status)
	validate.string.notVoid('status', status)
	
	return (async () => {
		//
	})()
}

/*
fetch('http://192.168.0.41:8000/tasks', {
	headers: { 
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGQyYjhlMTllYWQ1ZWFiNDllYzRjZTIiLCJpYXQiOjE1NzQwOTEwMzIsImV4cCI6MTU3NDE3NzQzMn0.Q574vZOvPhAjB6yBtjAhKeCe2MUwDmdE6CRoQdP9Oog' 
	}
})
	.then(res => res.json())
	.then(res => { debugger })
*/