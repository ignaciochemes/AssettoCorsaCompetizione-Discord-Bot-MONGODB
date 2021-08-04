const fs = require('fs');
const { GeneralConstants } = require('../../constants/genera.constants');

class LeerAllFolders {
    static _path = GeneralConstants.DEFAULT_SERVER_FOLDER;
    constructor() {}

    static async leerJson() {
        let lista = [];
        let folders = fs.readdirSync(this._path, (err, folders) => {
            if (err) throw new Error(`Error al obtener la carpeta ${this._path}`);
            return folders;
        });
        folders.forEach((folder) => { lista.push(folder) });
        return lista;
    };
}

module.exports = { LeerAllFolders };