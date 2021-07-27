const ping = require('ping');
const find = require('find-process');
const { LeerJson } = require('./leerJson');
const { RutasFolder } = require('../constants/rutas.constants');

class GetServers {
    constructor(){}

    static async getServers() {
        let servers = [];
        for(let i = 0; i < 18; i++) {
            let obtenerRuta = await RutasFolder.rutasFolder(i);
            let leerJson = await LeerJson.readConfigJson(obtenerRuta);
            let leerJsonNombre = await LeerJson.readJson(obtenerRuta);
            await find('port', leerJson.udpPort).then((resultado) => {
                if(!resultado[0]) {
                    servers.push(i + ' ' + leerJsonNombre.settings.serverName + " \`OFF\`");
                } else {
                    servers.push(i + ' ' + leerJsonNombre.settings.serverName + " \`ON\`");
                }
            });
        }
        return servers;
    }

    async getPing() {
        let res = await ping.promise.probe('google.com', { timeout: 2 } );
        return res;
    }
}

module.exports = { GetServers };