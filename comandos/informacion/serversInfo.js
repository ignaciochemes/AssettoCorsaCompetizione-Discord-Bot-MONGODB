const { MessageEmbed } = require('discord.js');
const { LeerJson } = require('../../complementos/leerJson');
const { RutasFolder } = require('../../constants/rutas.constants');

module.exports = {
    name: "informacion",
    aliases: ["sv"],
    category: "informacion",
    description: "Retorna informacion de algun servidor (preset)",
    usage: "!afrt informacion",
    run: async(client, message, args) => {
        let enviarMensaje = new MessageEmbed();
        if(!args[0] || !args) return message.reply(`Por favor ingresa algun servidor para buscar informacion. Por ejemplo: \`!afrt informacion 3\`.`)
        if(args[0] === '0') args[0] = RutasFolder.server0;
        if(args[0] === '1') args[0] = RutasFolder.server1;
        if(args[0] === '2') args[0] = RutasFolder.server2;
        if(args[0] === '3') args[0] = RutasFolder.server3;
        if(args[0] === '4') args[0] = RutasFolder.server4;
        if(args[0] === '5') args[0] = RutasFolder.server5;
        if(args[0] === '6') args[0] = RutasFolder.server6;
        if(args[0] === '7') args[0] = RutasFolder.server7;
        if(args[0] === '8') args[0] = RutasFolder.server8;
        if(args[0] === '9') args[0] = RutasFolder.server9;
        if(args[0] === '10') args[0] = RutasFolder.server10;
        if(args[0] === '11') args[0] = RutasFolder.server11;
        if(args[0] === '12') args[0] = RutasFolder.server12;
        if(args[0] === '13') args[0] = RutasFolder.server13;
        if(args[0] === '14') args[0] = RutasFolder.server14;
        if(args[0] === '15') args[0] = RutasFolder.server15;
        if(args[0] === '16') args[0] = RutasFolder.server16;
        if(args[0] === '17') args[0] = RutasFolder.server17;
        if(args[0] === '18') args[0] = RutasFolder.server18;
        let res = await LeerJson.readJson(args[0]);
        if(res.settings.trackMedalsRequirement === 0) {
            res.settings.trackMedalsRequirement = "Ninguna"
        }
        if(res.settings.safetyRatingRequirement === -1) {
            res.settings.safetyRatingRequirement = "Sin restriccion"
        }
        if(res.settings.carGroup === "FreeForAll") {
            res.settings.carGroup = "Mixto"
        }

        enviarMensaje.setTitle(`La informacion solicitada del servidor seleccionado es:`)
            .addField(`Nombre:`, `${res.settings.serverName}`, true)
            .addField(`Grupo:`, `${res.settings.carGroup}`, true)
            .addField(`Pista:`, `${res.event.track}`, true)
            .addField(`Temperatura:`, `${res.event.ambientTemp} C`, true)
            .addField(`Password:`, `${res.settings.password}`, true)
            .addField(`Slots:`, `${res.settings.maxCarSlots}`, true)
            .addField(`Track Medals Requirement:`, `${res.settings.trackMedalsRequirement}`, true)
            .addField(`Safety Rating Requirement:`, `${res.settings.safetyRatingRequirement}`, true)
            .addField(`Udp & Tcp port`, `${res.config.udpPort}`, true)
            .addField(`Max Connections`, `${res.config.maxConnections}`, true)
        return message.channel.send(enviarMensaje);
    }
}