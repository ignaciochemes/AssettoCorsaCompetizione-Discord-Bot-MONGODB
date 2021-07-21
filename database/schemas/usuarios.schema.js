const { Schema, model } = require('mongoose');

const UsuariosSchemaGt3 = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    playerId: {
        type: String
    },
    bestLap: {
        type: String
    },
    bestLapNum: {
        type: Number
    },
    splitUno: {
        type: String
    },
    splitDos: {
        type: String
    },
    splitTres: {
        type: String
    },
    splitUnoNum: {
        type: Number
    },
    splitDosNum: {
        type: Number
    },
    splitTresNum: {
        type: Number
    },
    fecha: {
        type: Date
    },
    pista: {
        type: String
    }
});

const usuariosgt3 = module.exports = model('UsuariosGt3', UsuariosSchemaGt3);