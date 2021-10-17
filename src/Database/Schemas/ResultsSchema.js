const { model, Schema } = require('mongoose');

const ResultsSchema = Schema({
    carpeta: {
        type: String
    },
    id: {
        type: String
    },
    sessionType: {
        type: String
    },
    trackName: {
        type: String
    },
    serverName: {
        type: String
    },
    sessionResult: {
        type: Object
    },
    laps: {
        type: Array
    }
});

const results = module.exports = model('Results', ResultsSchema)