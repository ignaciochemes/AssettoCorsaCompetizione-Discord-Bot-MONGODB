const { MsToSegundos, MsToSeconds } = require("./MsToSegundos");
const { CarsConstants } = require("../../Constants/CarsConstants");
const { MejoresVueltasDao } = require("../../Dao/MejorVueltaDao");

class BestLapsUtil {
    static async getBestLaps(folder) {
        let result = [];
        for (let i = 0; i < folder.length; i++) {
            const data = { nombre: folder[i] };
            const res = await MejoresVueltasDao.getMejoresVueltasDao(data);
            if (!res.archivos) break;
            for (let x in res.archivos) {
                const data = { id: res.archivos[x] };
                const findBestTimes = await MejoresVueltasDao.findBestTimes(data);
                const track = findBestTimes.trackName;
                const resultado = {
                    pista: track,
                    resto: findBestTimes.sessionResult.leaderBoardLines
                }
                result.push(resultado);
            }
        }
        return result;
    }

    static async getBestLapsData(vueltas) {
        for (let i = 0; i < vueltas.length; i++) {
            let findLap = vueltas[i];
            const track = await findLap.pista;
            const rest = await findLap.resto;
            for (let x = 0; x < rest.length; x++) {
                let calculateMs = MsToSeconds.msToSeconds(rest[x].timing.bestLap);
                let calculateMsNumber = calculateMs.replace(/:/gi, ".");
                let splitOne = MsToSeconds.msToSeconds(rest[x].timing.bestSplits[0]);
                let splitTwo = MsToSeconds.msToSeconds(rest[x].timing.bestSplits[1]);
                let splitThree = MsToSeconds.msToSeconds(rest[x].timing.bestSplits[2]);
                let searchDriverData = { playerId: rest[x].currentDriver.playerId, pista: track }
                let searchDriver = await MejoresVueltasDao.buscarUserPorPista(searchDriverData);
                let searchClass = rest[x].car.carModel;

                let data = {
                    nombre: rest[x].currentDriver.firstName,
                    apellido: rest[x].currentDriver.lastName,
                    playerId: rest[x].currentDriver.playerId,
                    bestLap: calculateMsNumber,
                    bestLapNum: rest[x].timing.bestLap,
                    splitUno: splitOne,
                    splitDos: splitTwo,
                    splitTres: splitThree,
                    splitUnoNum: rest[x].timing.bestSplits[0],
                    splitDosNum: rest[x].timing.bestSplits[1],
                    splitTresNum: rest[x].timing.bestSplits[2],
                    fecha: Date.now(),
                    pista: track,
                    clase: await CarsConstants.getClass(searchClass),
                    coche: await CarsConstants.getCar(searchClass)
                }
                if (!searchDriver) {
                    await MejoresVueltasDao.guardarUsuarios(data);
                } else if (rest[x].timing.bestLap < searchDriver.bestLapNum) {
                    let dataUpdate = {
                        bestLap: calculateMsNumber,
                        bestLapNum: rest[x].timing.bestLap,
                        splitUno: splitOne,
                        splitDos: splitTwo,
                        splitTres: splitThree,
                        splitUnoNum: rest[x].timing.bestSplits[0],
                        splitDosNum: rest[x].timing.bestSplits[1],
                        splitTresNum: rest[x].timing.bestSplits[2],
                        fecha: Date.now(),
                        coche: await CarsConstants.getCar(searchClass)
                    }
                    await MejoresVueltasDao.updatearUsuarios(searchDriverData, dataUpdate);
                }
            };
        }
    }
}

module.exports = { BestLapsUtil };