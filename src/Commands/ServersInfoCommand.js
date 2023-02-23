const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { PathFolderConstants } = require('../Constants/PathFolderConstants');
const { JsonServices } = require('../Services/JsonServices');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('information')
        .setDescription('Show server information')
        .addNumberOption(option => option.setName('number')
            .setDescription('Server number')
            .setRequired(true)),
    async execute(interaction) {
        const serverNumber = interaction.options._hoistedOptions[0].value;
        const getFolder = await PathFolderConstants.pathFolder(serverNumber);
        const serverConfiguration = await JsonServices.readJson(getFolder);

        if (serverConfiguration.settings.trackMedalsRequirement === 0) {
            serverConfiguration.settings.trackMedalsRequirement = "None"
        }
        if (serverConfiguration.settings.safetyRatingRequirement === -1) {
            serverConfiguration.settings.safetyRatingRequirement = "No restriction"
        }
        if (serverConfiguration.settings.carGroup === "FreeForAll") {
            serverConfiguration.settings.carGroup = "Mixed"
        }

        const response = new EmbedBuilder()
            .setTitle(`Server information ${serverNumber}`)
            .setDescription(`${serverConfiguration.settings.serverName}`)
            .addFields(
                { name: 'Group', value: `${serverConfiguration.settings.carGroup}`, inline: true },
                { name: 'Track', value: `${serverConfiguration.event.track}`, inline: true },
                { name: 'Temperature', value: `${serverConfiguration.event.ambientTemp} *C`, inline: true },
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