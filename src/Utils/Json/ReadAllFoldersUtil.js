const fs = require('fs');
const { GeneralConstants } = require('../../Constants/GeneralConstants');

class ReadAllFolderUtils {
    static _path = GeneralConstants.DEFAULT_SERVER_FOLDER;

    static async readJson() {
        let list = [];
        let folders = fs.readdirSync(this._path, (err, folders) => {
            if (err) throw new Error(`Error al obtener la carpeta ${this._path}`);
            return folders;
        });
        folders.forEach((folder) => { list.push(folder) });
        return list;
    };
}

module.exports = { ReadAllFolderUtils };