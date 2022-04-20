const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const { SelectServerMenuConstants } = require("../Constants/SelectMenuConstants/SelectServerMenuConstants");

const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('select-server')
            .setPlaceholder('Seleccione el servidor')
            .addOptions(SelectServerMenuConstants.SERVER_MENU_CONSTANTS),
    );

module.exports = {
    name: "levantadasdsadsadsadsadsar",
    description: "Levanta una carpeta de un servidor",
    run: async (client, message, args) => {
        return message.channel.send({ content: "Seleccione un servidor", components: [row] });
    }
    // async execute(interaction) {
    //     return await interaction.reply({ content: 'Pedro', components: [row] });
    //     //await interaction.update({ content: 'Algo fue seleccionado', components: [] });
    // },
};