const find = require('find-process');
const { spawn } = require('child_process');
const { LeerJson } = require('./leerJson');
const { ChequeoRuta } = require('./chequearRutas');
const { RutasFolder } = require('../constants/rutas.constants');
const { TextConstants } = require('../constants/text.constants');
const { GeneralConstants } = require('../constants/genera.constants');

class ApagarServer {
    constructor(){}

    static async apagarServer(message, ruta) {
        let getFolder = await RutasFolder.rutasFolder(ruta);
        let buscar = await LeerJson.readConfigJson(getFolder);
        let getStopBash = await ChequeoRuta.chequeoRutaStop(ruta);
        await find('port', buscar.udpPort).then((list) => {
            if(!list.length) {
                message.reply(TextConstants.APAGAR_SERVER_ERROR)
                    .then(m => m.delete({timeout: GeneralConstants.DEFAULT_TIMEOUT}));
            } else {
                setTimeout(() => {
                    const stopServer = spawn(getStopBash);
                    stopServer.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`).then(m => m.delete({ timeout: GeneralConstants.DEFAULT_TIMEOUT }));
                    });
                }, 15000);
                return message.reply(TextConstants.APAGAR_SERVER_MESSAGE);
            }
        })
    }
}

module.exports = { ApagarServer };