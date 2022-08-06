const { SlashCommandBuilder } = require('discord.js');
const { GetServers } = require('../Complementos/GetServers');

// module.exports = {
//     name: "servers",
//     aliases: ["sv"],
//     category: "informacion",
//     description: "Retorna todos los servidores disponibles (presets)",
//     usage: "!afrt servers",
//     run: async(client, message, args) => {
//         let res = await GetServers.getServers();
//         return message.reply(res);
//     }
// }

module.exports = {
    data: new SlashCommandBuilder()
        .setName('servers')
        .setDescription('Muestra todos los servidores disponibles'),
    async execute(interaction) {
        let res = await GetServers.getServers();
        return interaction.reply(res);
    }
}