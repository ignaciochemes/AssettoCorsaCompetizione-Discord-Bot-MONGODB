const { Pistas } = require("../constants/pistas.constants");
const { TiemposDao } = require("../daos/tiempos");

class TiemposTabla {
    constructor(){}

    static async getTablaGt3(pista) {
        let res = Pistas.pistas.find(obj => obj === pista);
        if(!res) return false;
        let tiempos = await TiemposDao.getTiemposGt3(pista);
        return tiempos;
    }

    static async getTablaGt4() {
        let res = Pistas.pistas.find(obj => obj === pista);
        if(!res) return false;
        let tiempos = await TiemposDao.getTiemposGt3(pista);
        return tiempos;
    }
}

module.exports = { TiemposTabla }