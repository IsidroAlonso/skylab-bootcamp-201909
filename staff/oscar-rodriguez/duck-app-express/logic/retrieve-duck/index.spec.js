const { expect } = require('chai')
const retrieveDuck = require ('../retrieve-duck')

describe('logic - retrieve duck', function() {
    it('should succeed on correct duck id', function() {
        var id = '5c3853aebd1bde8520e66e1b'

        return retrieveDuck(id)
            .then (duck => {
                expect(duck).to.exist
                expect(duck.id).to.equal(id)

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
    })

    it('should fail on incorrect duck id', function() {
        var id = '5c3853ABCd1bde8520e66e1b'

        return retrieveDuck(id)
            .catch(error => {

            expect(error.message).to.exist
            expect(typeof error.message).to.equal('string')
            expect(error.message.length).to.be.greaterThan(0)

        })
    })

    it('should fail on incorrect id or expression types', function() {
        expect(function() { retrieveDuck(1); }).to.throw(TypeError, '1 is not a string')
        expect(function() { retrieveDuck(true); }).to.throw(TypeError, 'true is not a string')
        expect(function() { retrieveDuck([]); }).to.throw(TypeError, ' is not a string')
        expect(function() { retrieveDuck({}); }).to.throw(TypeError, '[object Object] is not a string')
        expect(function() { retrieveDuck(undefined); }).to.throw(TypeError, 'undefined is not a string')
        expect(function() { retrieveDuck(null); }).to.throw(TypeError, 'null is not a string')
    })
})