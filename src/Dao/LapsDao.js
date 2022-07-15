const lapsSchema = require('../Database/Schemas/LapsSchema');
const folderLapsSchema = require('../Database/Schemas/FolderLapsSchema');

class LapsDao {

    static async getFolders() {
        const result = await folderLapsSchema.find();
        return result;
    }

    static async findBestTimes(data) {
        const result = await lapsSchema.findOne(data);
        return result;
    }

    static async buscarUserPorPista(data) {
        const result = await lapsSchema.findOne(data);
        return result;
    }

    static async saveFolders(data) {
        const result = new folderLapsSchema(data);
        await result.save();
    }

    static async updatearUsuarios(filter, data) {
        const result = await lapsSchema.findOneAndUpdate(filter, data);
        return result;
    }
}

module.exports = { LapsDao };