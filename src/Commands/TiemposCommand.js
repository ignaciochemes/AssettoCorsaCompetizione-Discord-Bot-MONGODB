const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const { GeneralConstants } = require("../Constants/GeneralConstants");
const { SelectCircuitosMenuConstants } = require("../Constants/SelectMenuConstants/SelectPistasMenuConstants");
const { TextConstants } = require("../Constants/TextConstants");

const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('select-circuito')
            .setPlaceholder('Seleccione el circuito')
            .addOptions(SelectCircuitosMenuConstants.CIRCUITOS_MENU_CONSTANTS),
    );

module.exports = {
    name: "tiempos",
    description: "Muestra una tabla de tiempos en una pista",
    usage: "!afrt tiempos",
    run: async(client, message, args) => {
        if (args[0]) return message.reply(TextConstants.TABLA_SI_ARGS);
        return message.channel.send({content: 'Seleccione un circuito', components: [row] })
            .then((msg) => {
                message.delete();
                setTimeout(() => msg.delete(), GeneralConstants.DEFAULT_TIMEOUT);
            })
    }
}