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

    static async prenderServer(interaction) {
        const number = interaction.options._hoistedOptions[0].value;
        const minutes = interaction.options._hoistedOptions[1].value;
        if (parseInt(minutes, 10) < 5) return interaction.reply(TextConstants.MIN_MINUTOS);
        if (parseInt(minutes, 10) > 720) return interaction.reply(TextConstants.MAX_MINUTOS);
        this._minutos = minutes;
        const getFolder = await RutasFolder.rutasFolder(number);
        const buscar = await LeerJson.readConfigJson(getFolder);
        const getStartBash = await ChequeoRuta.chequeoRutaStart(number);
        const getStopBash = await ChequeoRuta.chequeoRutaStop(number);
        ConfigurationServer.editSessionDuration(minutes, getFolder);
        const findServersOn = await find('port', buscar.udpPort);
        if (findServersOn.length) {
            return interaction.reply(TextConstants.SERVER_ALREADY_RUNNING);
        }
        try {
            const start = spawn(getStartBash, [], { detached: true });
            start.unref();
            interaction.reply(TextConstants.SERVER_STARTED);
        } catch (error) {
            return interaction.reply(TextConstants.SERVER_NOT_STARTED);
        }
        let mcs1r = Math.floor(this._minutos * 60000);
        let cincoM = Math.floor(5 * 60000);
        setTimeout(() => { return interaction.reply('El servidor se apagara en \`5 minutos\`') }, Math.floor(mcs1r-cincoM));
        setTimeout(() => {
            const stopServer = spawn(getStopBash, ['-lh', '/usr']);
            stopServer.stdout.on('data', (data) => {
                return interaction.channel.send(`${data}`)
                    .then(m => m.delete({timeout: GeneralConstants.BASH_MSG_TIMEOUT}));
            });
        }, Math.floor(mcs1r));
    }
}

module.exports = { PrenderServer };
