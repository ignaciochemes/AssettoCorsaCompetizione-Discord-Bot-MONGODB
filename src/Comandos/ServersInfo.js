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
        const number = interaction.options._hoistedOptions[0].value;
        const route = await RutasFolder.rutasFolder(number);
        const json = await LeerJson.readJson(route);

        if(json.settings.trackMedalsRequirement === 0) {
            json.settings.trackMedalsRequirement = "Ninguna"
        }
        if(json.settings.safetyRatingRequirement === -1) {
            json.settings.safetyRatingRequirement = "Sin restriccion"
        }
        if(json.settings.carGroup === "FreeForAll") {
            json.settings.carGroup = "Mixto"
        }

        const response = new EmbedBuilder()
            .setTitle(`Información del servidor ${number}`)
            .setDescription(`${json.settings.serverName}`)
            .addFields(
                { name: 'Grupo', value: `${json.settings.carGroup}`, inline: true },
                { name: 'Pista', value: `${json.settings.track}`, inline: true },
                { name: 'Temperatura', value: `${json.event.track}`, inline: true },
                { name: 'Password', value: `${json.settings.password}`, inline: true },
                { name: 'Slots', value: `${json.settings.maxCarSlots}`, inline: true },
                { name: 'Track Medals Requirement', value: `${json.settings.trackMedalsRequirement}`, inline: true },
                { name: 'Safety Rating Requirement', value: `${json.settings.safetyRatingRequirement}`, inline: true },
                { name: 'Udp & Tcp Port', value: `${json.config.udpPort}`, inline: true },
                { name: 'Max Connections', value: `${json.config.maxConnections}`, inline: true },
            )
        return interaction.reply({ embeds: [response] });
    }
}