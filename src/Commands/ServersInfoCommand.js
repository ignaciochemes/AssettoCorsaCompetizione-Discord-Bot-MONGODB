const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { PathFolderConstants } = require('../Constants/PathFolderConstants');
const { JsonServices } = require('../Services/JsonServices');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('informacion')
        .setDescription('Muestra información del servidor')
        .addNumberOption(option => option.setName('numero')
            .setDescription('Número del servidor')
            .setRequired(true)),
    async execute(interaction) {
        const serverNumber = interaction.options._hoistedOptions[0].value;
        const getFolder = await PathFolderConstants.pathFolder(serverNumber);
        const serverConfiguration = await JsonServices.readJson(getFolder);

        if (serverConfiguration.settings.trackMedalsRequirement === 0) {
            serverConfiguration.settings.trackMedalsRequirement = "Ninguna"
        }
        if (serverConfiguration.settings.safetyRatingRequirement === -1) {
            serverConfiguration.settings.safetyRatingRequirement = "Sin restriccion"
        }
        if (serverConfiguration.settings.carGroup === "FreeForAll") {
            serverConfiguration.settings.carGroup = "Mixto"
        }

        const response = new EmbedBuilder()
            .setTitle(`Información del servidor ${serverNumber}`)
            .setDescription(`${serverConfiguration.settings.serverName}`)
            .addFields(
                { name: 'Grupo', value: `${serverConfiguration.settings.carGroup}`, inline: true },
                { name: 'Pista', value: `${serverConfiguration.event.track}`, inline: true },
                { name: 'Temperatura', value: `${serverConfiguration.event.ambientTemp} *C`, inline: true },
                { name: 'Password', value: `${serverConfiguration.settings.password}`, inline: true },
                { name: 'Slots', value: `${serverConfiguration.settings.maxCarSlots}`, inline: true },
                { name: 'Track Medals Requirement', value: `${serverConfiguration.settings.trackMedalsRequirement}`, inline: true },
                { name: 'Safety Rating Requirement', value: `${serverConfiguration.settings.safetyRatingRequirement}`, inline: true },
                { name: 'Udp & Tcp Port', value: `${serverConfiguration.config.udpPort}`, inline: true },
                { name: 'Max Connections', value: `${serverConfiguration.config.maxConnections}`, inline: true },
            )
        return interaction.reply({ embeds: [response] });
    }
}