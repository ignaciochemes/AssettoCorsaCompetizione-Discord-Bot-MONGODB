const find = require("find-process");
const { spawn } = require("child_process");
const { TextConstants } = require("../Constants/TextConstants");
const { GeneralConstants } = require("../Constants/GeneralConstants");
const { PathFolderConstants } = require("../Constants/PathFolderConstants");
const { PathServices } = require("./PathServices");
const { ConfigurationServerUtils } = require("../Utils/Json/ConfigurationServer");
const { JsonServices } = require("./JsonServices");
const { PingServices } = require("./PingServices");

class ServerServices {
    static _minutes;

    static async startServer(interaction) {
        const number = interaction.options._hoistedOptions[0].value;
        const minutes = interaction.options._hoistedOptions[1].value;
        if (parseInt(minutes, 10) < 5) return interaction.reply(TextConstants.MIN_MINUTOS);
        if (parseInt(minutes, 10) > 720) return interaction.reply(TextConstants.MAX_MINUTOS);
        this._minutes = minutes;
        const getFolder = await PathFolderConstants.pathFolder(number);
        const buscar = await JsonServices.readConfigJson(getFolder);
        const getStartBash = await PathServices.checkStartPath(number);
        const getStopBash = await PathServices.checkStopPath(number);
        ConfigurationServerUtils.editSessionDuration(minutes, getFolder);
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
        let mcs1r = Math.floor(this._minutes * 60000);
        let cincoM = Math.floor(5 * 60000);
        setTimeout(() => { return interaction.reply('The server will shut down in \`5 minutes\`') }, Math.floor(mcs1r - cincoM));
        setTimeout(() => {
            const stopServer = spawn(getStopBash, ['-lh', '/usr']);
            stopServer.stdout.on('data', (data) => {
                return interaction.channel.send(`${data}`)
                    .then(m => m.delete({ timeout: GeneralConstants.BASH_MSG_TIMEOUT }));
            });
        }, Math.floor(mcs1r));
    }

    static async getServers() {
        let servers = [];
        for (let i = 0; i < 22; i++) {
            const getFolder = await PathFolderConstants.pathFolder(i);
            const readJson = await JsonServices.readConfigJson(getFolder);
            const readJsonName = await JsonServices.readJson(getFolder);
            await find('port', readJson.udpPort).then(async (resultado) => {
                if (!resultado[0]) {
                    servers.push({ numero: i, nombre: readJsonName.settings.serverName, status: 'offline' });
                } else {
                    servers.push({ numero: i, nombre: readJsonName.settings.serverName, status: 'online', ping: await PingServices.getPing() });
                }
            });
        }
        return servers;
    }
}

module.exports = { ServerServices };
