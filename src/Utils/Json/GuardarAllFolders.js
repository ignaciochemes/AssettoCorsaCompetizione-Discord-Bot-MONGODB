const fs = require('fs');
const { JsonDao } = require('../../Dao/JsonDao');
const { GeneralConstants } = require('../../Constants/GeneralConstants');

class GuardarAllFolders {

    static async guardarAllFolders(data) {
        for(let i = 0; i < data.length; i++) {
            let archivos = [];
            let res = fs.readdirSync(GeneralConstants.DEFAULT_SERVER_FOLDER + `/${data[i]}/results`, (err, files) => {
                if(err) throw new Error('Error al obtener las carpetas');
                return files;
            });
            res.forEach((file) => {
                if(!file.includes('entrylist')) {
                    archivos.push(file);
                }
            });

            const dataCheck = { nombre: data[i] };
            let checkDao = await JsonDao.chequearCarpetaDao(dataCheck);
            if(checkDao == null || checkDao.length == 0) {
                let folder = {
                    nombre: data[i],
                    archivos: archivos,
                    fecha: Date.now()
                };
                await JsonDao.insertarCarpetaDao(folder);
            } else {
                let mapeoRes = archivos.map(file => { return {file} });
                let mapeoChequeoDao = checkDao.archivos.map(file => { return {file} });
                if(mapeoRes.length != mapeoChequeoDao.length) {
                    let filter = { nombre: data[i] };
                    let newData = { archivos: archivos };
                    await JsonDao.actualizarCarpetaDao(filter, newData);
                }
            }
        }
    }
}

module.exports = { GuardarAllFolders };