const { Schema, model } = require('mongoose');

const lapsSchema = new Schema({
    folder: {
        type: String,
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    coche: {
        type: String
    },
    laps: {
        type: Number
    }
});

const laps = module.exports = model('Laps', lapsSchema);