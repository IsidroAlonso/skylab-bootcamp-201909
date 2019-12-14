const call = require ('../../helpers/call')
const retrieveUser = require ('../retrieve-user')
const {expect} = require('chai')

describe('logic - retrieve user', () => {
    let name, surname, email, password
    let id, token

    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `guayemail-${Math.random()}@mail.com`
        password = `password-${Math.random()}`

        call('POST', 'https://skylabcoders.herokuapp.com/api/user', undefined, { name, surname, username: email, password }, result => {
            if (result.error)
                done(new Error(result.error))
            else {
                call('POST', 'https://skylabcoders.herokuapp.com/api/auth', undefined, { username: email, password }, result => {
                if (result.error)
                    done(new Error(result.error))
                    else {
                        id = result.data.id
                        token = result.data.token
                        done(undefined, result)
                    }
                })
            }
        })
    })

    it('should succeed on correct credentials', () => {
        return retrieveUser(id, token)
            .then (response => {

                expect(response).to.exist

                const { name, surname, username } = response.data

                expect(name).to.exist
                expect(typeof name).to.equal('string')
                expect(name.length).to.be.greaterThan(0)

                expect(surname).to.exist
                expect(typeof surname).to.equal('string')
                expect(surname.length).to.be.greaterThan(0)

                expect(username).to.exist
                expect(typeof username).to.equal('string')
        })
    })
})