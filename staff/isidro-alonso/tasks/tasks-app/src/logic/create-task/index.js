export default function (title, description) {
	// TODO validate

	return fetch('http://192.168.0.37:8000/tasks', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer username?',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ title, description })
	})
		.then(res => res.status === 201 ? undefined : res.json().then(({ message }) => { throw Error(message) }))
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