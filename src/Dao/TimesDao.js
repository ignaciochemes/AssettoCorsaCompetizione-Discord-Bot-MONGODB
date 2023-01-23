const tiempos = require('../Database/Schemas/UsuariosSchema');

class TimesDao {
    static async getTimes(track, clas) {
        const query = await tiempos
            .find({ pista: track, clase: clas })
            .sort({ bestLapNum: 1 })
            .limit(10);
        return query;
    }
}

module.exports = { TimesDao };