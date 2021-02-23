const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
//Path Folder
const server0 = require('../../complementos/leerJsonServer0');
const server1 = require('../../complementos/leerJsonServer1');
const server2 = require('../../complementos/leerJsonServer2');
const server3 = require('../../complementos/leerJsonServer3');
const server4 = require('../../complementos/leerJsonServer4');
const server5 = require('../../complementos/leerJsonServer5');
const server6 = require('../../complementos/leerJsonServer6');
const server7 = require('../../complementos/leerJsonServer7');
const server8 = require('../../complementos/leerJsonServer8');
const server9 = require('../../complementos/leerJsonServer9');
const server10 = require('../../complementos/leerJsonServer10');
const server11 = require('../../complementos/leerJsonServer11');
const server12 = require('../../complementos/leerJsonServer12');
const server13 = require('../../complementos/leerJsonServer13');
const server14 = require('../../complementos/leerJsonServer14');
const server15 = require('../../complementos/leerJsonServer15');
const server16 = require('../../complementos/leerJsonServer16');
const server17 = require('../../complementos/leerJsonServer17');
const server18 = require('../../complementos/leerJsonServer18');

module.exports = {
    name: "informacion",
    aliases: ["sv"],
    category: "informacions",
    description: "Retorna informacion de algun servidor (preset)",
    usage: "!afrt informacion",
    run: async(client, message, args) => {
        let enviarMensaje = new Discord.MessageEmbed();
        if (!args[0] || !args)
            return message.reply(`Por favor ingresa algun servidor para buscar informacion. Por ejemplo: \`!afrt informacion 3\`.`)
        if (args[0] === '0') {
            args[0] = server0;
        }
        if (args[0] === '1') {
            args[0] = server1;
        }
        if (args[0] === '2') {
            args[0] = server2;
        }
        if (args[0] === '3') {
            args[0] = server3;
        }
        if (args[0] === '4') {
            args[0] = server4;
        }
        if (args[0] === '5') {
            args[0] = server5;
        }
        if (args[0] === '6') {
            args[0] = server6;
        }
        if (args[0] === '7') {
            args[0] = server7;
        }
        if (args[0] === '8') {
            args[0] = server8;
        }
        if (args[0] === '9') {
            args[0] = server9;
        }
        if (args[0] === '10') {
            args[0] = server10;
        }
        if (args[0] === '11') {
            args[0] = server11;
        }
        if (args[0] === '12') {
            args[0] = server12;
        }
        if (args[0] === '13') {
            args[0] = server13;
        }
        if (args[0] === '14') {
            args[0] = server14;
        }
        if (args[0] === '15') {
            args[0] = server15;
        }
        if (args[0] === '16') {
            args[0] = server16;
        }
        if (args[0] === '17') {
            args[0] = server17;
        }
        if (args[0] === '18') {
            args[0] = server18;
        }
        if (args[0].dataSettingsJson.trackMedalsRequirement === 0) {
            args[0].dataSettingsJson.trackMedalsRequirement = "Ninguna"
        }
        if (args[0].dataSettingsJson.safetyRatingRequirement === -1) {
            args[0].dataSettingsJson.safetyRatingRequirement = "Sin restriccion"
        }
        if (args[0].dataSettingsJson.carGroup === "FreeForAll") {
            args[0].dataSettingsJson.carGroup = "Mixto"
        }

        enviarMensaje.setTitle(`La informacion solicitada del servidor seleccionado es:`)
            .addField(`Nombre:`, `${args[0].dataSettingsJson.serverName}`, true)
            .addField(`Grupo:`, `${args[0].dataSettingsJson.carGroup}`, true)
            .addField(`Pista:`, `${args[0].dataEventJson.track}`, true)
            .addField(`Temperatura:`, `${args[0].dataEventJson.ambientTemp} C`, true)
            .addField(`Password:`, `${args[0].dataSettingsJson.password}`, true)
            .addField(`Slots:`, `${args[0].dataSettingsJson.maxCarSlots}`, true)
            .addField(`Track Medals Requirement:`, `${args[0].dataSettingsJson.trackMedalsRequirement}`, true)
            .addField(`Safety Rating Requirement:`, `${args[0].dataSettingsJson.safetyRatingRequirement}`, true)
        message.channel.send(enviarMensaje);
    }
}