const { expect } = require('chai')
const call = require('../../helpers/call')
const retrieveDuck = require('.')

describe('logic - retrieve duck', () => {
    let duckId = '5c3853aebd1bde8520e66e11'

    it('should succeed on correct duck id', () =>
        retrieveDuck(duckId)
        .then(duck => {
            expect(duck).to.exist
            expect(duck.id).to.equal(duckId)

            expect(duck.title).to.exist
            expect(typeof duck.title).to.equal('string')
            expect(duck.title.length).to.be.greaterThan(0)

            expect(duck.imageUrl).to.exist
            expect(typeof duck.imageUrl).to.equal('string')
            expect(duck.imageUrl.length).to.be.greaterThan(0)

            expect(duck.description).to.exist
            expect(typeof duck.description).to.equal('string')
            expect(duck.description.length).to.be.greaterThan(0)

            expect(duck.link).to.exist
            expect(typeof duck.link).to.equal('string')
            expect(duck.link.length).to.be.greaterThan(0)

            expect(duck.price).to.exist
            expect(typeof duck.price).to.equal('string')
            expect(duck.price.length).to.be.greaterThan(0)

        })
    )



    it('should fail on incorrect duck id', () => {
        const wrongDuckId = '5c3853ABCd1bde8520e66e1b'

        retrieveDuck(wrongDuckId)
            .then(() => { throw new Error('should not reach this point') })
            .catch(error => {
                expect(error).to.exist

                expect(error.message).to.exist
                expect(typeof error.message).to.equal('string')
                expect(error.message.length).to.be.greaterThan(0)
                expect(error.message).to.equal(`duck with id ${wrongDuckId} not found`)
            })
    })

    it('should fail on incorrect id or expression types', () => {
        // TODO cases when id and token have values diff from non-empty string

        expect(() => { retrieveDuck(1) }).to.throw(TypeError, '1 is not a string')
        expect(() => { retrieveDuck(true) }).to.throw(TypeError, 'true is not a string')
        expect(() => { retrieveDuck([]) }).to.throw(TypeError, ' is not a string')
        expect(() => { retrieveDuck({}) }).to.throw(TypeError, '[object Object] is not a string')
        expect(() => { retrieveDuck(undefined) }).to.throw(TypeError, 'undefined is not a string')
        expect(() => { retrieveDuck(null) }).to.throw(TypeError, 'null is not a string')
    })
})