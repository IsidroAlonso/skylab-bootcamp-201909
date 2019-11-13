const { expect } = require('chai')
const authenticateUser = require('.')
const { ContentError } = require('../../utils/errors')
const fs = require('fs').promises
const path = require('path')

describe('logic - authenticate user', () => {
    it('happy path', () => {
        authenticateUser(email, password)
    })

    it('should fail on incorrect email, password, or expression type and content', () => {
        expect(() => registerUser('')).to.throw(ContentError, 'e-mail is empty or blank')
        expect(() => registerUser(' \t\r')).to.throw(ContentError, 'e-mail is empty or blank')

        expect(() => registerUser(email, '')).to.throw(ContentError, 'password is empty or blank')
        expect(() => registerUser(email, ' \t\r')).to.throw(ContentError, 'password is empty or blank')
    })
})