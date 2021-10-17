const { MsToSegundos } = require("./MsToSegundos");
const { Coches } = require("../../Constants/CochesConstants");
const { MejoresVueltasDao } = require("../../Dao/MejorVueltaDao");

class MejoresVueltas {
    constructor(){}

    static async getMejoresVueltas(folder) {
        let result = [];
        for(let i = 0; i < folder.length; i++) {
            let data = { nombre: folder[i] };
            let res = await MejoresVueltasDao.getMejoresVueltasDao(data);
            if(!res.archivos) break;
            for(let x in res.archivos) {
                let data = { id: res.archivos[x] };
                let find = await MejoresVueltasDao.findBestTimes(data);
                let pista = find.trackName;
                let resultado = {
                    pista: pista,
                    resto: find.sessionResult.leaderBoardLines
                }
                result.push(resultado);
            }
        }
        return result;
    }

    static async getDataMejorVuelta(vueltas) {
        for(let i = 0; i < vueltas.length; i++){
            let find = vueltas[i];
            let pista = await find.pista;
            let rest = await find.resto;
            for(let x = 0; x < rest.length; x++) {
                let calcularMs = MsToSegundos.msToSegundos(rest[x].timing.bestLap);
                let calcularMsNumber = calcularMs.replace(/:/gi, ".");
                let splitUno = MsToSegundos.msToSegundos(rest[x].timing.bestSplits[0]);
                let splitDos = MsToSegundos.msToSegundos(rest[x].timing.bestSplits[1]);
                let splitTres = MsToSegundos.msToSegundos(rest[x].timing.bestSplits[2]);
                let buscarUserData = {  playerId: rest[x].currentDriver.playerId, pista: pista }
                let buscarUser = await MejoresVueltasDao.buscarUserPorPista(buscarUserData);
                let buscarClase = rest[x].car.carModel;
                
                let data = {
                    nombre: rest[x].currentDriver.firstName,
                    apellido: rest[x].currentDriver.lastName,
                    playerId: rest[x].currentDriver.playerId,
                    bestLap: calcularMsNumber,
                    bestLapNum: rest[x].timing.bestLap,
                    splitUno: splitUno,
                    splitDos: splitDos,
                    splitTres: splitTres,
                    splitUnoNum: rest[x].timing.bestSplits[0],
                    splitDosNum: rest[x].timing.bestSplits[1],
                    splitTresNum: rest[x].timing.bestSplits[2],
                    fecha: Date.now(),
                    pista: pista,
                    clase: await Coches.getClase(buscarClase),
                    coche: await Coches.getCoche(buscarClase)
                }
                if(!buscarUser) {
                    await MejoresVueltasDao.guardarUsuarios(data);
                } else if(rest[x].timing.bestLap < buscarUser.bestLapNum) {
                    let dataUpdate = {
                        bestLap: calcularMsNumber,
                        bestLapNum: rest[x].timing.bestLap,
                        splitUno: splitUno,
                        splitDos: splitDos,
                        splitTres: splitTres,
                        splitUnoNum: rest[x].timing.bestSplits[0],
                        splitDosNum: rest[x].timing.bestSplits[1],
                        splitTresNum: rest[x].timing.bestSplits[2],
                        fecha: Date.now(),
                        coche: await Coches.getCoche(buscarClase)
                    }
                    await MejoresVueltasDao.updatearUsuarios(buscarUserData, dataUpdate);
                }
            };
        }
    }
}

module.exports = { MejoresVueltas };