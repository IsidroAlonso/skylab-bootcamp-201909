const { expect } = require('chai')
const call = require('../../helpers/call')
const authenticateUser = require('.')
const { ContentError } = require('../../utils/errors')

describe('logic - authenticate user', () => {
    let name, lastName, mail, password

    beforeEach(done => {
        name = `name-${Math.random()}`
        lastName = `lastName-${Math.random()}`
        mail = `mail-${Math.random()}@mail.com`
        password = `password-${Math.random()}`

        call('POST', 'https://skylabcoders.herokuapp.com/api/user', undefined, { name, lastName, username: mail, password }, result => {
            if (result.error) done(new Error(result.error))
            else done()
        })
    })

    it('should succeed on correct credentials', () =>
        authenticateUser(mail, password)
        .then(response => {
            expect(response).to.exist

            const { id, token } = response

            expect(id).to.exist
            expect(typeof id).to.equal('string')
            expect(id.length).to.be.greaterThan(0)

            expect(token).to.exist
            expect(typeof token).to.equal('string')
            expect(token.length).to.be.greaterThan(0)
        })
    )

    it('should fail on incorrect name, lastName, mail, password, or expression type and content', () => {
        expect(() => authenticateUser(1)).to.throw(TypeError, '1 is not a string')
        expect(() => authenticateUser(true)).to.throw(TypeError, 'true is not a string')
        expect(() => authenticateUser([])).to.throw(TypeError, ' is not a string')
        expect(() => authenticateUser({})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => authenticateUser(undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => authenticateUser(null)).to.throw(TypeError, 'null is not a string')

        expect(() => authenticateUser(mail, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => authenticateUser(mail, true)).to.throw(TypeError, 'true is not a string')
        expect(() => authenticateUser(mail, [])).to.throw(TypeError, ' is not a string')
        expect(() => authenticateUser(mail, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => authenticateUser(mail, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => authenticateUser(mail, null)).to.throw(TypeError, 'null is not a string')

        /* expect(() => authenticateUser('')).to.throw(ContentError, 'mail is empty or blank')
        expect(() => authenticateUser(' \t\r')).to.throw(ContentError, 'mail is empty or blank')
        expect(() => authenticateUser(mail, '')).to.throw(ContentError, 'password is empty or blank')
        expect(() => authenticateUser(mail, ' \t\r')).to.throw(ContentError, 'password is empty or blank') */
    })

    // TODO other cases
})