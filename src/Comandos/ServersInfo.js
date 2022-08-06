const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { LeerJson } = require('../Complementos/LeerJson');
const { RutasFolder } = require('../Constants/RutasConstants');
const { TextConstants } = require('../Constants/TextConstants');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('informacion')
        .setDescription('Muestra información del servidor')
        .addNumberOption(option => option.setName('numero')
            .setDescription('Número del servidor')
            .setRequired(true)),
    async execute(interaction) {
        const response = new EmbedBuilder();
        console.log(interaction);
        return interaction.reply('test');
        // let ruta = await RutasFolder.rutasFolder(args[0]);
        // let res = await LeerJson.readJson(ruta);

        // if(res.settings.trackMedalsRequirement === 0) {
        //     res.settings.trackMedalsRequirement = "Ninguna"
        // }
        // if(res.settings.safetyRatingRequirement === -1) {
        //     res.settings.safetyRatingRequirement = "Sin restriccion"
        // }
        // if(res.settings.carGroup === "FreeForAll") {
        //     res.settings.carGroup = "Mixto"
        // }

        // enviarMensaje.setTitle(`La informacion solicitada del servidor seleccionado es:`)
        //     .addField(`Nombre:`, `${res.settings.serverName}`, true)
        //     .addField(`Grupo:`, `${res.settings.carGroup}`, true)
        //     .addField(`Pista:`, `${res.event.track}`, true)
        //     .addField(`Temperatura:`, `${res.event.ambientTemp} C`, true)
        //     .addField(`Password:`, `${res.settings.password}`, true)
        //     .addField(`Slots:`, `${res.settings.maxCarSlots}`, true)
        //     .addField(`Track Medals Requirement:`, `${res.settings.trackMedalsRequirement}`, true)
        //     .addField(`Safety Rating Requirement:`, `${res.settings.safetyRatingRequirement}`, true)
        //     .addField(`Udp & Tcp port`, `${res.config.udpPort}`, true)
        //     .addField(`Max Connections`, `${res.config.maxConnections}`, true)
        // return message.channel.send(enviarMensaje);
    }
}