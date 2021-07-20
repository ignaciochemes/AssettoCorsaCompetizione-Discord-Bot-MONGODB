const find = require('find-process');
const { LeerJson } = require('./leerJson');
const { spawn } = require('child_process');
const { ChequeoRuta } = require('./chequearRutas');
const { RutasFolder } = require('../constants/rutas.constants');
const { TextConstants } = require('../constants/text.constants');
const { GeneralConstants } = require('../constants/genera.constants');

class ApagarServer {
    constructor(){}

    static async apagarServer(message, ruta) {
        let getFolder = await RutasFolder.rutasFolder(message, ruta);
        let buscar = await LeerJson.readConfigJson(getFolder);
        let getStopBash = await ChequeoRuta.chequeoRutaStop(ruta);
        await find('port', buscar.udpPort).then((list) => {
            if(!list.length) return message.reply(TextConstants.APAGAR_ERROR)
            .then(m => m.delete({ timeout: GeneralConstants.DEFAULT_TIMEOUT }));
            setTimeout(() => {
                const stopServer = spawn(getStopBash);
                stopServer.stdout.on('data', (data) => {
                    return message.channel.send(`${data}`).then(m => m.delete({ timeout: GeneralConstants.BASH_MSG_TIMEOUT }))
                })
            }, GeneralConstants.BASH_MSG_TIMEOUT);
            return message.reply(TextConstants.APAGAR_DONE);
        });
    };
}

module.exports = { ApagarServer }