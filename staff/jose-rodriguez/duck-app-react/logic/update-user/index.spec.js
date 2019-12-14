describe('logic - update-user', () => {
    let name, surname, email, password, id, token

    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`

        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, result => {
            if (result.error) done(new Error(result.error))
            else {
                call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
                    if (result.error) done(new Error(result.error))
                    else {
                        const { data } = result

                        id = data.id
                        token = data.token

                        done()
                    }
                })
            }
        })
    })

    it('should succeed changing user properties', done => {
        
        toggleFavDuck(id, token, favs, (error, data) => {
            expect(error).toBeUndefined()
            expect(data).toBeDefined()
            expect(data.name).toBe(name)
            expect(data.surname).toBe(surname)
            expect(data.username).toBe(email)
            expect(data.password).toBeUndefined()

            done()
        })
    })

    it('should fail on incorrect name, surname, email, password, or expression type and content', () => {
        expect(() => authenticateUser(1)).toThrowError(TypeError, '1 is not a string')
        expect(() => authenticateUser(true)).toThrowError(TypeError, 'true is not a string')
        expect(() => authenticateUser([])).toThrowError(TypeError, ' is not a string')
        expect(() => authenticateUser({})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => authenticateUser(undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => authenticateUser(null)).toThrowError(TypeError, 'null is not a string')

        expect(() => authenticateUser('')).toThrowError(ContentError, 'e-mail is empty or blank')
        expect(() => authenticateUser(' \t\r')).toThrowError(ContentError, 'e-mail is empty or blank')

        expect(() => authenticateUser(email, 1)).toThrowError(TypeError, '1 is not a string')
        expect(() => authenticateUser(email, true)).toThrowError(TypeError, 'true is not a string')
        expect(() => authenticateUser(email, [])).toThrowError(TypeError, ' is not a string')
        expect(() => authenticateUser(email, {})).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => authenticateUser(email, undefined)).toThrowError(TypeError, 'undefined is not a string')
        expect(() => authenticateUser(email, null)).toThrowError(TypeError, 'null is not a string')

        expect(() => authenticateUser(email, '')).toThrowError(ContentError, 'password is empty or blank')
        expect(() => authenticateUser(email, ' \t\r')).toThrowError(ContentError, 'password is empty or blank')

        expect(() => authenticateUser(email, password, 1)).toThrowError(TypeError, '1 is not a function')
        expect(() => authenticateUser(email, password, true)).toThrowError(TypeError, 'true is not a function')
        expect(() => authenticateUser(email, password, [])).toThrowError(TypeError, ' is not a function')
        expect(() => authenticateUser(email, password, {})).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => authenticateUser(email, password, undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => authenticateUser(email, password, null)).toThrowError(TypeError, 'null is not a function')
    })

    // TODO other cases
})