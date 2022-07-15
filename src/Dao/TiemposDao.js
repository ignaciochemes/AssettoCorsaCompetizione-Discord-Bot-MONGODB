const tiempos = require('../Database/Schemas/UsuariosSchema');

class TiemposDao {

    static async getTiempos(pista, clase) {
        const query = await tiempos
            .find({ pista: pista, clase: clase })
            .sort({ bestLapNum: 1 })
            .limit(10);
        return query;
    }

}

module.exports = { TiemposDao }