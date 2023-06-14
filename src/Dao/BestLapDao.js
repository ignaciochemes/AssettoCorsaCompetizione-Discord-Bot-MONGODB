const folderSchema = require('../Database/Schemas/FolderSchema');
const resultSchema = require('../Database/Schemas/ResultsSchema');
const usuariosSchema = require('../Database/Schemas/UsuariosSchema');

class BestLapsDao {
    static async getBestLaps(data) {
        const result = await folderSchema.findOne(data);
        return result;
    }

    static async findBestTimes(data) {
        const result = await resultSchema.findOne(data);
        return result;
    }

    static async buscarUserPorPista(data) {
        const result = await usuariosSchema.findOne(data);
        return result;
    }

    static async saveDrivers(data) {
        const result = new usuariosSchema(data);
        await result.save();
    }

    static async updateDrivers(filter, data) {
        const result = await usuariosSchema.findOneAndUpdate(filter, data);
        return result;
    }
}

module.exports = { BestLapsDao };