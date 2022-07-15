const find = require('find-process');
const { LeerJson } = require('./LeerJson');
const { spawn } = require('child_process');
const { ChequeoRuta } = require('./ChequearRutas');
const { RutasFolder } = require('../Constants/RutasConstants');
const { TextConstants } = require('../Constants/TextConstants');
const { GeneralConstants } = require('../Constants/GeneralConstants');

class ApagarServer {

    static async apagarServer(message, ruta) {
        const getFolder = await RutasFolder.rutasFolder(ruta);
        const buscar = await LeerJson.readConfigJson(getFolder);
        const getStopBash = await ChequeoRuta.chequeoRutaStop(ruta);

        await find('port', buscar.udpPort).then((list) => {
            if (!list.length) return message.reply(TextConstants.APAGAR_ERROR)
                .then(m => m.delete({ timeout: GeneralConstants.DEFAULT_TIMEOUT }));
            setTimeout(() => {
                const stopServer = spawn(getStopBash);
                stopServer.stdout.on('data', (data) => {
                    if (data.toString().length == 1) return;
                    const messageToSend = data.toString();
                    return message.channel.send(`${messageToSend}`).then(m => m.delete({ timeout: GeneralConstants.BASH_MSG_TIMEOUT }))
                })
            }, GeneralConstants.BASH_MSG_TIMEOUT);
            return message.reply(TextConstants.APAGAR_DONE);
        });
    };
}

module.exports = { ApagarServer }