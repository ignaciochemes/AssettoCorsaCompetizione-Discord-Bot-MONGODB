const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { GetServers } = require('../Complementos/GetServers');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servers')
        .setDescription('Muestra todos los servidores disponibles'),
    async execute(interaction) {
        const res = await GetServers.getServers();
        const response = new EmbedBuilder()
            .setTitle('Servidores')
            .setDescription('Lista de servidores disponibles')
            .setColor('#0099ff')
            res.forEach(server => {
                response.addFields({ name: `${server.numero} - ${server.nombre}`, value: server.status, inline: true });
            });
        return interaction.reply({ embeds: [response] });
    }
}