const { expect } = require('chai')
const call = require('../../helpers/call')
const registerUser = require('../register-user')

describe('logic - register user', () => {
    let name, surname, email, password

    beforeEach(() => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
    })

    it('should succeed on correct credentials', () => {
        return registerUser(name, surname, email, password)
            .then (response => {
                expect(response).to.exist
            })
    })

    describe('when user already exists', () => {
        beforeEach(done => {
            call('POST', 'https://skylabcoders.herokuapp.com/api/user', undefined, { name, surname, username: email, password }, result => {
                if (result.error) done(new Error(result.error))
                else done()
            })
        })

        it('should fail on already existing user', () => {
            return registerUser(name, surname, email, password)
                .catch (error => {
                    expect(error).to.exist

                    expect(error.message).to.exist
                    expect(typeof error.message).to.equal('string')
                    expect(error.message.length).to.be.greaterThan(0)
            })

        })
    })

    it('should fail on incorrect name, surname, email, password, or expression type and content', () => {
        expect(() => registerUser(1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser([])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser({})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(null)).to.throw(TypeError, 'null is not a string')

        expect(() => registerUser(name, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(name, true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser(name, [])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser(name, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, null)).to.throw(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, [])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, null)).to.throw(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, email, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, email, true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, email, [])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, email, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, email, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, email, null)).to.throw(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, email, password, 1)).to.throw(TypeError, '1 is not a function')
        expect(() => registerUser(name, surname, email, password, true)).to.throw(TypeError, 'true is not a function')
        expect(() => registerUser(name, surname, email, password, [])).to.throw(TypeError, ' is not a function')
        expect(() => registerUser(name, surname, email, password, {})).to.throw(TypeError, '[object Object] is not a function')
        expect(() => registerUser(name, surname, email, password, undefined)).to.throw(TypeError, 'undefined is not a function')
        expect(() => registerUser(name, surname, email, password, null)).to.throw(TypeError, 'null is not a function')
    })

    // TODO other cases
})