const { TiemposDao } = require("../Dao/TiemposDao");
const { Pistas } = require("../Constants/PistasConstants");

class TiemposTabla {

    static async getTablaGt3(pista, clase) {
        const res = Pistas.pistas.find(obj => obj === pista);
        if(res == undefined || res == null) return false;
        const tiempos = await TiemposDao.getTiempos(pista, clase);
        return tiempos;
    }

    static async getTablaGt4(pista, clase) {
        const res = Pistas.pistas.find(obj => obj === pista);
        if(res == undefined || res == null) return false;
        const tiempos = await TiemposDao.getTiempos(pista, clase);
        return tiempos;
    }
}

module.exports = { TiemposTabla }