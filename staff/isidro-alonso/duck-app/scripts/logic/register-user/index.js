function registerUser(email, password) {
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')

    call('POST', 'https://skylabcoders.herokuapp.com/api/user', { "username": email, "password": password }, () => {
    })
}