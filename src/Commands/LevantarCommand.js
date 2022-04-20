const { MessageActionRow, MessageSelectMenu } = require("discord.js");

const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('Seleccione el servidor')
            .addOptions([
                {
                    label: 'Servidor 1',
                    description: 'Monza 2020',
                    value: 'first_option'
                },
                {
                    label: 'Servidor 2',
                    description: 'Bathurst 2019',
                    value: 'second_option'
                }
            ]),
    );

module.exports = {
    name: "levantar",
    description: "Levanta una carpeta de un servidor",
    run: async (client, message, args) => {
        message.channel.send({ content: "Seleccione un servidor", components: [row] });
    }
    // async execute(interaction) {
    //     return await interaction.reply({ content: 'Pedro', components: [row] });
    //     //await interaction.update({ content: 'Algo fue seleccionado', components: [] });
    // },
};