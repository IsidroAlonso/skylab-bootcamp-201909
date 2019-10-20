if (typeof Array.prototype.shuffle === 'undefined')
    Array.prototype.shuffle = function () {
        const result = [];

        for (let i = 0; i < this.length; i++) result[i] = this[i];

        for (let i = 0; i < result.length; i++) {
            const random = Math.floor(Math.random() * result.length);

            const value = result[i];

            result[i] = result[random];

            result[random] = value;
        }

        return result;
    };