const find = require("find-process");
const { LeerJson } = require("./LeerJson");
const { spawn } = require("child_process");
const { TextConstants } = require("../Constants/TextConstants");
const { GeneralConstants } = require("../Constants/GeneralConstants");
const { RutasFolder } = require("../Constants/RutasConstants");
const { ChequeoRuta } = require("./ChequearRutas");
const { ConfigurationServer } = require("../Utils/Json/ConfigurationServer");

class PrenderServer {

    static _minutos;
    
    static async prenderServer(message, ruta) {
        const filter = m => m.author.id === message.author.id;
        message.reply(TextConstants.PRENDER_MINUTOS).then(r => r.delete({ timeout: GeneralConstants.DEFAULT_TIMEOUT }));
        const res = await message.channel.awaitMessages(filter, { max: 1, time: GeneralConstants.DEFAULT_TIMEOUT })
            .then(colectado => { return this._minutos = colectado.first().content });

        if (res === 'cancelar') return message.reply('Cancelado!');
        if (parseInt(res, 10) > 300) return message.reply(TextConstants.MAX_MINUTOS);
        if (parseInt(res, 10) < 1) return message.reply(TextConstants.MIN_MINUTOS);

        const getFolder = await RutasFolder.rutasFolder(ruta);
        const buscar = await LeerJson.readConfigJson(getFolder);
        const getStartBash = await ChequeoRuta.chequeoRutaStart(ruta);
        const getStopBash = await ChequeoRuta.chequeoRutaStop(ruta);

        ConfigurationServer.editSessionDuration(res, getFolder);

        await find('port', buscar.udpPort).then((list) => {
            if (!list.length) {
                try {
                    const startServer = spawn(getStartBash);
                    startServer.stdout.on('data', (data) => {
                        if (data.toString().length == 1) return;
                        const messageToSend = data.toString();
                        return message.channel.send(`${messageToSend}`).then(m => m.delete({ timeout: GeneralConstants.BASH_MSG_TIMEOUT }));
                    });
                    setTimeout(() => { message.reply(`El servidor \`${ruta}\` se levanto perfectamente con una duracion de \`${minutos}\` minutos. 
                    \nPuede corroborarlo con el comando \`!afrt servers\``) }, 5000);
                } catch (e) {
                    if (e) {
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                        .then(m => m.delete({timeout: GeneralConstants.DEFAULT_TIMEOUT}, client.destroy()));
                    }
                }
                let mcs1r = Math.floor(this._minutos * 60000);
                let cincoM = Math.floor(5 * 60000);
                setTimeout(() => { return message.reply('El servidor se apagara en \`5 minutos\`') }, Math.floor(mcs1r-cincoM));
                setTimeout(() => {
                    const stopServer = spawn(getStopBash, ['-lh', '/usr']);
                    stopServer.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`)
                            .then(m => m.delete({timeout: GeneralConstants.BASH_MSG_TIMEOUT}));
                    });
                }, Math.floor(mcs1r));
            } else {
                return message.reply(`El servidor ${ruta} Ya esta prendido. Esta seguro que introdujo el numero correcto?`)
                    .then(m => m.delete({timeout: GeneralConstants.DEFAULT_TIMEOUT}));
            }
        })
    }
}

module.exports = { PrenderServer };
