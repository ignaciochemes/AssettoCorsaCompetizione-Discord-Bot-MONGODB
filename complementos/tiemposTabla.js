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
        const emb = new messageEmbed();
        if(!res) {
            emb.setDescription(`La pista elegida no se reconoce. Aqui te dejo una lista de las pistas que acepto.`)
            .addFields({ name: 'Pistas', value: '```' + `${Pistas.pistas}` + '```'})
            return message.channel.send(emb);
        }
        let tiempos = await TiemposDao.getTiemposGt3(pista);
        console.log(tiempos);
    }
}

module.exports = { TiemposTabla }