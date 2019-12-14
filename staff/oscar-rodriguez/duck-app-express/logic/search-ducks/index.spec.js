const searchDucks = require ('../search-ducks')
const {expect} = require('chai')

describe('logic - search ducks', function () {
    let name, surname, email, password, id, token, duckId = '5c3853aebd1bde8520e66e1b'

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

    it('should succeed on correct criteria (query)', () => {
        var query = 'blue';

        return searchDucks(id, token, query)
            .then (ducks => {

            expect(ducks).to.exist
            expect(ducks.length).to.be.greaterThan(0)

            ducks.forEach(duck => {
                expect(duck).to.exist
                expect(typeof duck.id).to.equal('string')
                expect(duck.id.length).to.be.greaterThan(0)

                expect(duck.title).to.exist
                expect(typeof duck.title).to.equal('string')
                expect(duck.title.length).to.be.greaterThan(0)

                expect(duck.imageUrl).to.exist
                expect(typeof duck.imageUrl).to.equal('string')
                expect(duck.imageUrl.length).to.be.greaterThan(0)

                expect(duck.price).to.exist
                expect(typeof duck.price).to.equal('string')
                expect(duck.price.length).to.be.greaterThan(0)
            })

        })
    })

    it('should fail on incorrect criteria', () => {
        var query = 'asdfljasdf'

        return searchDucks (id, token, query)
        .catch (error => {

            expect(error).to.exist

            expect(error.message).to.exist
            expect(typeof error.message).to.equal('string')
            expect(error.message.length).to.be.greaterThan(0)

        })
    })

    it('should fail on incorrect query or expression types', function() {
        expect(function() { searchDucks(1); }).to.throw(TypeError, '1 is not a string')
        expect(function() { searchDucks(true); }).to.throw(TypeError, 'true is not a string')
        expect(function() { searchDucks([]); }).to.throw(TypeError, ' is not a string')
        expect(function() { searchDucks({}); }).to.throw(TypeError, '[object Object] is not a string')
        expect(function() { searchDucks(undefined); }).to.throw(TypeError, 'undefined is not a string')
        expect(function() { searchDucks(null); }).to.throw(TypeError, 'null is not a string')
    })
})