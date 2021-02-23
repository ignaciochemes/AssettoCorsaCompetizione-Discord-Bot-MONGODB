const mongoose = require('mongoose');

const tiempoSchema = new mongoose.Schema({
    Tiempo: {
        type: String
    },
    Usuario: {
        type: String
    },
    Pista: {
        type: String
    },
    Coche: {
        type: String
    },
    Categoria: {
        type: String
    },
    FechaDia: {
        type: String
    },
    FechaMes: {
        type: String
    },
    FechaAnio: {
        type: String
    },
    Nombre: {
        type: String
    },
});

const MessageModel = module.exports = mongoose.model('tiempos', tiempoSchema);