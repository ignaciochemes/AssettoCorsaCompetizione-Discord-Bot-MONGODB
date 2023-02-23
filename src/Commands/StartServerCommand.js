const { SlashCommandBuilder } = require("discord.js");
const { ServerServices } = require("../Services/ServerServices");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('startup')
        .setDescription('turn on server')
        .addNumberOption(option => option.setName('number')
            .setDescription('Server number')
            .setRequired(true))
        .addNumberOption(option => option.setName('minutes')
            .setDescription('Number of minutes')
            .setRequired(true)),
    async execute(interaction) {
        return await ServerServices.startServer(interaction);
    }
}