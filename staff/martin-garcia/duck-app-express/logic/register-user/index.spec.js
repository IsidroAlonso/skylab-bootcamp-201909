const { expect } = require('chai')
const call = require('../../helpers/call')
const registerUser = require('.')
const { ContentError } = require('../../utils/errors')

describe('logic - register user', () => {
    let name, lastname, mail, password

    beforeEach(() => {
        name = `name-${Math.random()}`
        lastname = `lastname-${Math.random()}`
        mail = `mail-${Math.random()}@mail.com`
        password = `password-${Math.random()}`
        age = 20
    })

    it('should succeed on correct credentials', () =>
        registerUser(name, lastname, mail, password, age)
        .then(response => {
            expect(response).to.be.undefined
        })
    )

    describe('when user already exists', () => {
        beforeEach(done => {
            call('POST', 'https://skylabcoders.herokuapp.com/api/user', undefined, { name, lastname, username: mail, password }, result => {
                if (result.error) done(new Error(result.error))
                else done()
            })
        })

        it('should fail on already existing user', () =>
            registerUser(name, lastname, mail, password, age)
            .then(() => {
                throw Error('should not reach this point')
            })
            .catch(error => {
                expect(error).to.exist

                expect(error.message).to.exist
                expect(typeof error.message).to.equal('string')
                expect(error.message.length).to.be.greaterThan(0)
                expect(error.message).to.equal(`user with username "${mail}" already exists`)
            })
        )
    })

    it('should fail on incorrect name, lastname, mail, password, or expression type and content', () => {
        expect(() => registerUser(1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser([])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser({})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(null)).to.throw(TypeError, 'null is not a string')
            /* 
                    expect(() => registerUser('')).to.throw(ContentError, 'name is empty or blank')
                    expect(() => registerUser(' \t\r')).to.throw(ContentError, 'name is empty or blank') */

        expect(() => registerUser(name, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(name, true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser(name, [])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser(name, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, null)).to.throw(TypeError, 'null is not a string')
            /* 
                    expect(() => registerUser(name, '')).to.throw(ContentError, 'lastname is empty or blank')
                    expect(() => registerUser(name, ' \t\r')).to.throw(ContentError, 'lastname is empty or blank') */

        expect(() => registerUser(name, lastname, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(name, lastname, true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser(name, lastname, [])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser(name, lastname, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, lastname, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, lastname, null)).to.throw(TypeError, 'null is not a string')
            /* 
                    expect(() => registerUser(name, lastname, '')).to.throw(ContentError, 'mail is empty or blank')
                    expect(() => registerUser(name, lastname, ' \t\r')).to.throw(ContentError, 'mail is empty or blank') */

        expect(() => registerUser(name, lastname, mail, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => registerUser(name, lastname, mail, true)).to.throw(TypeError, 'true is not a string')
        expect(() => registerUser(name, lastname, mail, [])).to.throw(TypeError, ' is not a string')
        expect(() => registerUser(name, lastname, mail, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, lastname, mail, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, lastname, mail, null)).to.throw(TypeError, 'null is not a string')

        /* expect(() => registerUser(name, lastname, mail, '')).to.throw(ContentError, 'password is empty or blank')
        expect(() => registerUser(name, lastname, mail, ' \t\r')).to.throw(ContentError, 'password is empty or blank') */



    })

    // TODO other cases
})