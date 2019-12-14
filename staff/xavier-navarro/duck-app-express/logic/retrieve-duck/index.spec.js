const { expect } = require('chai')
const call = require('../../helpers/call')
const retrieveDuck = require('../retrieve-duck')

describe('logic - retrieve duck', () => {
    let name, surname, email, password, id, token, duckId = '5c3853aebd1bde8520e66e11'

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

    it('should succeed on correct duck id', () => {
        return retrieveDuck(id, token, duckId)
            .then((duck) => {
                expect(duck).not.to.be.undefined
                expect(duck.id).to.equal(duckId)

                expect(duck.title).not.to.be.undefined
                expect(typeof duck.title).to.equal('string')
                expect(duck.title.length).to.be.greaterThan(0)

                expect(duck.image).not.to.be.undefined
                expect(typeof duck.image).to.equal('string')
                expect(duck.image.length).to.be.greaterThan(0)

                expect(duck.description).not.to.be.undefined
                expect(typeof duck.description).to.equal('string')
                expect(duck.description.length).to.be.greaterThan(0)

                expect(duck.link).not.to.be.undefined
                expect(typeof duck.link).to.equal('string')
                expect(duck.link.length).to.be.greaterThan(0)

                expect(duck.price).not.to.be.undefined
                expect(typeof duck.price).to.equal('string')
                expect(duck.price.length).to.be.greaterThan(0)

                expect(duck.isFav).to.be.false

            })
    })

    describe('when fav already exists', () => {
        beforeEach(done => {
            call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, { favs: [duckId] }, result => {
                result.error ? done(new Error(result.error)) : done()
            })
        })

        it('should succeed on correct duck id', () => {
            return retrieveDuck(id, token, duckId)
                .then(duck => {
    
                    expect(duck).not.to.be.undefined
                    expect(duck.id).to.equal(duckId)
        
                    expect(duck.title).not.to.be.undefined
                    expect(typeof duck.title).to.equal('string')
                    expect(duck.title.length).to.be.greaterThan(0)
        
                    expect(duck.image).not.to.be.undefined
                    expect(typeof duck.image).to.equal('string')
                    expect(duck.image.length).to.be.greaterThan(0)
        
                    expect(duck.description).not.to.be.undefined
                    expect(typeof duck.description).to.equal('string')
                    expect(duck.description.length).to.be.greaterThan(0)
        
                    expect(duck.link).not.to.be.undefined
                    expect(typeof duck.link).to.equal('string')
                    expect(duck.link.length).to.be.greaterThan(0)
        
                    expect(duck.price).not.to.be.undefined
                    expect(typeof duck.price).to.equal('string')
                    expect(duck.price.length).to.be.greaterThan(0)
        
                    expect(duck.isFav).to.be.true
        
                })
        })
    })

    it('should fail on incorrect duck id', () => {
        const wrongDuckId = '5c3853ABCd1bde8520e66e1b'

        return retrieveDuck(id, token, wrongDuckId)
            .then(() => {
                throw Error ('should not reach this point')
            
            })

            .catch((error) => { 
                expect(error).not.to.be.undefined

                expect(error.message).not.to.be.undefined
                expect(typeof error.message).to.equal('string')
                expect(error.message.length).to.be.greaterThan(0)
        })
    })

    it('should fail on incorrect id or expression types', () => {

        expect(() => { retrieveDuck(id, token, 1) }).to.throw(TypeError, '1 is not a string')
        expect(() => { retrieveDuck(id, token, true) }).to.throw(TypeError, 'true is not a string')
        expect(() => { retrieveDuck(id, token, []) }).to.throw(TypeError, ' is not a string')
        expect(() => { retrieveDuck(id, token, {}) }).to.throw(TypeError, '[object Object] is not a string')
        expect(() => { retrieveDuck(id, token, undefined) }).to.throw(TypeError, 'undefined is not a string')
        expect(() => { retrieveDuck(id, token, null) }).to.throw(TypeError, 'null is not a string')
    })

})