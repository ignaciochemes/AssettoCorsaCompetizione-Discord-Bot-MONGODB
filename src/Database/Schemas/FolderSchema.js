const { Schema, model } = require('mongoose');

const FolderSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    archivos: {
        type: Array,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
});

const folder = module.exports = model('Folder', FolderSchema);