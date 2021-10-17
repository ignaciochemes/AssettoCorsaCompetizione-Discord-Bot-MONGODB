const { Schema, model } = require('mongoose');

const folderLapsSchema = new Schema({
    pista: {
        type: String,
    },
    resto: {
        type: Array
    }
});

const folderLaps = module.exports = model('FolderLaps', folderLapsSchema);