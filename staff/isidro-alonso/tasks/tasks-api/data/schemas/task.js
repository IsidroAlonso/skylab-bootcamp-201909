const { Schema } = require('mongoose')

module.exports =  new Schema({
    id: { // id del usuario que crea, modifica o destruye la tarea
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
