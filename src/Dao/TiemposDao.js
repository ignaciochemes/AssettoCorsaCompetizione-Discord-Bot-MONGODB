const tiempos = require('../Database/Schemas/UsuariosSchema');

class TiemposDao {
    constructor(){}

    static async getTiempos(pista, clase) {
        let res = await tiempos.find({ pista: pista, clase: clase }).sort({bestLapNum: 1}).limit(10);
        return res;
    }
}

module.exports = { TiemposDao }