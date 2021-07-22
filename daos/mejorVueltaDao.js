const folderSchema = require('../database/schemas/folder.schema');
const resultSchema = require('../database/schemas/results.schema');
const usuariosSchema = require('../database/schemas/usuarios.schema');

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