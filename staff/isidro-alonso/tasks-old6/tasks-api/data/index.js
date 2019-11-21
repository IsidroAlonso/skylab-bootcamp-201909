const mongoose = require('mongoose')

module.exports = {
    database: {
        connect(url) {
            return mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
        },
        disconnect() {
            return mongoose.disconnect()
        }
    },
    models: require('./models')
}