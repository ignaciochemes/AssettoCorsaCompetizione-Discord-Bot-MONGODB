const ping = require('ping');
const find = require('find-process');
const { LeerJson } = require('./LeerJson');
const { RutasFolder } = require('../Constants/RutasConstants');

class GetServers {
    
    static async getServers() {
        let servers = [];
        for (let i = 0; i < 22; i++) {
            const obtenerRuta = await RutasFolder.rutasFolder(i);
            const leerJson = await LeerJson.readConfigJson(obtenerRuta);
            const leerJsonNombre = await LeerJson.readJson(obtenerRuta);
            await find('port', leerJson.udpPort).then(async (resultado) => {
                if (!resultado[0]) {
                    servers.push(`${i} - ${leerJsonNombre.settings.serverName} \`OFF\``);
                } else {
                    servers.push(`${i} - ${leerJsonNombre.settings.serverName} \`ON\` - Ping: \`${await this.getPing()} Ms\``);
                }
            });
        }
        return servers;
    }

    static async getPing() {
        const res = await ping.promise.probe('google.com', { timeout: 2 } ); 
        return res.time;
    }
}

module.exports = { GetServers };