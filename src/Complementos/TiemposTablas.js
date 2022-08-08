const { TiemposDao } = require("../Dao/TiemposDao");
const { Pistas } = require("../Constants/PistasConstants");

class TiemposTabla {

    static async getTiempos(pista, clase) {
        const res = Pistas.pistas.find(obj => obj === pista);
        if(res == undefined || res == null) return false;
        const tiempos = await TiemposDao.getTiempos(pista, clase);
        return tiempos;
    }
    
}

module.exports = { TiemposTabla }