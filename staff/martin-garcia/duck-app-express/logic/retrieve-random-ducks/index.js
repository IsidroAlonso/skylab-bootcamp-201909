const validate = require('../../utils/validate')
const call = require('../../helpers/call')


if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function() {
        var result = [];

        for (var i = 0; i < this.length; i++) result[i] = this[i];

        for (var i = 0; i < result.length; i++) {
            var random = Math.floor(Math.random() * result.length);

            var value = result[i];

            result[i] = result[random];

            result[random] = value;
        }

        return result;
    };


module.exports = function(number, userId, tokenId) {
    validate.string(userId)
    validate.string.notVoid('userId', userId)

    validate.string(tokenId)
    validate.string.notVoid('tokenId', tokenId)

    validate.number(number)


    return new Promise((resolve, reject) => {
        call('GET', `https://duckling-api.herokuapp.com/api/search?q=`, undefined, undefined, (result) => {
            if (result.error) return reject(new Error(result.error))

            result = result.shuffle().slice(0, number)

            call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, tokenId, undefined, (favDucks) => {
                if (favDucks.error) { return reject(new Error(favDucks.error)) }
                favs = favDucks.data.favDucks
                if (favs) {
                    result.forEach(element => {
                        (favs.includes(element.id)) ? element.isFav = 'true': element.isFav = 'false'
                    });
                }
                resolve(result)

            });


        })
    })

}