const tiempos = require('../database/schemas/usuarios.schema');

class TiemposDao {
    constructor(){}

    static async getTiemposGt3(pista) {
        let res = await tiempos.find({ pista: pista }).sort({bestLapNum: 1}).limit(10);
        return res;
    }
}

module.exports = { TiemposDao }