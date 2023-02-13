const { SlashCommandBuilder } = require("discord.js");
const { ServerServices } = require("../Services/ServerServices");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('levantar')
        .setDescription('Levantar un servidor')
        .addNumberOption(option => option.setName('numero')
            .setDescription('Número del servidor')
            .setRequired(true))
        .addNumberOption(option => option.setName('minutos')
            .setDescription('Número de minutos')
            .setRequired(true)),
    async execute(interaction) {
        return await ServerServices.startServer(interaction);
    }
}