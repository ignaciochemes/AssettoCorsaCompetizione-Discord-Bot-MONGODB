const lapsSchema = require('../Database/Schemas/LapsSchema');
const folderLapsSchema = require('../Database/Schemas/FolderLapsSchema');

class LapsDao {
    constructor(){}

    static async getFolders() {
        let result = await folderLapsSchema.find();
        return result;
    }

    static async findBestTimes(data) {
        let result = await lapsSchema.findOne(data);
        return result;
    }

    static async buscarUserPorPista(data) {
        let result = await lapsSchema.findOne(data);
        return result;
    }

    static async saveFolders(data) {
        let result = new folderLapsSchema(data);
        await result.save();
    }

    static async updatearUsuarios(filter, data) {
        let result = await lapsSchema.findOneAndUpdate(filter, data);
        return result;
    }
}

module.exports = { LapsDao };