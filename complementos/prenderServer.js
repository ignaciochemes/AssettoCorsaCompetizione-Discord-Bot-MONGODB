const find = require("find-process");
const { LeerJson } = require("./leerJson");
const { spawn, exec } = require('child_process');
const { TextConstants } = require("../constants/text.constants");
const { GeneralConstants } = require("../constants/genera.constants");
const { RutasFolder } = require("../constants/rutas.constants");
const { ChequeoRuta } = require("./chequearRutas");

class PrenderServer {
    constructor(){}

    static async prenderServer(process, message, ruta) {
        let minutos;
        const filter = m => m.author.id === message.author.id;
        message.reply(TextConstants.PRENDER_MINUTOS).then(r => r.delete({ timeout: GeneralConstants.DEFAULT_TIMEOUT }));
        let res = await message.channel.awaitMessages(filter, { max: 1, time: GeneralConstants.DEFAULT_TIMEOUT })
            .then(colectado => { return minutos = colectado.first().content });
        if(res === 'cancelar') return message.reply('Cancelado!');
        if(res > 300) return message.reply(TextConstants.MAX_MINUTOS);
        let getFolder = await RutasFolder.rutasFolder(ruta);
        let buscar = await LeerJson.readConfigJson(getFolder);
        let getStartBash = await ChequeoRuta.chequeoRutaStart(ruta);
        let getStopBash = await ChequeoRuta.chequeoRutaStop(ruta)
        console.log(getStartBash);
        await find('port', buscar.udpPort).then((list) => {
            if(!list.length) {
                try {
                    const startServer = spawn(getStartBash);
                    startServer.stdout.on('data', (data) => {
                        return message.channel.send(`${data}`).then(m => m.delete({ timeout: GeneralConstants.BASH_MSG_TIMEOUT }));
                    });
                    setTimeout(() => { message.reply(`El servidor \`${buscar.udpPort}\` se levanto perfectamente con una duracion de \`${minutos}\` minutos. 
                    \nPuede corroborarlo con el comando \`!afrt servers\``) }, 5000);
                } catch (e) {
                    if(e) {
                        return message.reply(`Por algun motivo el servidor elegido no se puede iniciar \n${e}`)
                        .then(m => m.delete({timeout: GeneralConstants.DEFAULT_TIMEOUT}, client.destroy()));
                    }
                }
                let mcs1r = Math.floor(minutos*60000);
                let cincoM = Math.floor(5*60000);
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