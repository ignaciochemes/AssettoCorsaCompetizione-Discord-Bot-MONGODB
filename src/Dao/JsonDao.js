const folderSchema = require("../Database/Schemas/FolderSchema");
const resultSchema = require("../Database/Schemas/ResultsSchema");

class JsonDao {
    constructor(){}
    
    static async chequearCarpetaDao(data) {
        let result = await folderSchema.findOne(data);
        return result;
    }

    static async insertarCarpetaDao(data) {
        let result = new folderSchema(data);
        await result.save();
    }

    static async actualizarCarpetaDao(filter, data) {
        let result = await folderSchema.findOneAndUpdate(filter, data);
        return result;
    }

    static async findNewJson(data) {
        let result = await resultSchema.findOne(data);
        return result;
    }

    static async pushNewJson(data) {
        let result = new resultSchema(data);
        await result.save();
    }
}

module.exports = { JsonDao };