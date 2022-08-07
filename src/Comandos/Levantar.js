const { SlashCommandBuilder } = require("discord.js");
const { PrenderServer } = require("../complementos/prenderServer");

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
        await PrenderServer.prenderServer(interaction);
    }
}