const { Schema, model } = require('mongoose');

const TiemposSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    pista: {
        type: String,
        required: true,
    },
    coche: {
        type: String,
        required: true
    },
    tiempo: {
        type: Number,
        required: true,
    },
    sectorUno: {
        type: Number,
        required: true
    },
    sectorDos: {
        type: Number,
        required: true
    },
    sectorTres: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    vueltas: {
        type: Number,
        default: 0
    }
});

const tiempos = module.exports = model('Tiempos', TiemposSchema);