const fs = require('fs');
const { ReadJson } = require('./readJson.util');
const { JsonDao } = require("../../daos/jsonDao");
const { GeneralConstants } = require('../../constants/genera.constants');

class LeerJsonDb {
    constructor(){}

    static async leerJson(json) {
        for(let i = 0; i < json.length; i++) {
            let chequeoDaoNombre = { nombre: json[i] };
            let chequeoDao = await JsonDao.chequearCarpetaDao(chequeoDaoNombre);
            chequeoDao = Object.values(chequeoDao.archivos);
            if(!chequeoDao.length) continue;
            for(let x = 0; x < chequeoDao.length; x++) {
                let data = { id: chequeoDao[x] };
                let find = await JsonDao.findNewJson(data);
                if(!find) {
                    let res = fs.readFileSync(GeneralConstants.DEFAULT_SERVER_FOLDER + `/${json[i]}/results/${chequeoDao[x]}`, 'utf-8', (err, data) => {
                        if (err) throw err;
                        return data;
                    });
                    let dataToPush = await ReadJson.readJson(res);
                    let dataReadyToPush = {
                        carpeta: json[i],
                        id: data.id,
                        sessionType: dataToPush.sessionType,
                        trackName: dataToPush.trackName,
                        serverName: dataToPush.serverName,
                        sessionResult: dataToPush.sessionResult,
                        laps: dataToPush.laps
                    }
                    await JsonDao.pushNewJson(dataReadyToPush);
                }
            }
        }
    }
}

module.exports = { LeerJsonDb };
