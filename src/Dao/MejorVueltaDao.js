const folderSchema = require('../Database/Schemas/FolderSchema');
const resultSchema = require('../Database/Schemas/ResultsSchema');
const usuariosSchema = require('../Database/Schemas/UsuariosSchema');

class MejoresVueltasDao {
    constructor(){}

    static async getMejoresVueltasDao(data) {
        let result = await folderSchema.findOne(data);
        return result;
    }

    static async findBestTimes(data) {
        let result = await resultSchema.findOne(data);
        return result;
    }

    static async buscarUserPorPista(data) {
        let result = await usuariosSchema.findOne(data);
        return result;
    }

    static async guardarUsuarios(data) {
        let result = new usuariosSchema(data);
        await result.save();
    }

    static async updatearUsuarios(filter, data) {
        let result = await usuariosSchema.findOneAndUpdate(filter, data);
        return result;
    }
}

module.exports = { MejoresVueltasDao };