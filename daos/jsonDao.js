const folderSchema = require("../database/schemas/folder.schema");

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
}

module.exports = { JsonDao };