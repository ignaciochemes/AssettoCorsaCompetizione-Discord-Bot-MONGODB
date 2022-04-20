const client = require('../../afrt.js');
const { InteractionConstants } = require('../Constants/InteractionConstants.js');
const { InteractionHandler } = require('../Interactions/InteractionHandler.js');
const { TiemposInteraction } = require('../Interactions/TiemposInteraction.js');

client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return interaction.followUp({ content: "Ocurrio un error inesperado" });
        const args = [];
        interaction.options.array().map((option) => {
            if (option.value) args.push(option.value);
            if (option.name) args.push(option.name);
        });
        command.run(client, interaction, args);
    }
    if (interaction.isSelectMenu()) {
        const result = new InteractionHandler(interaction);
        if (result.interactionCustomId === InteractionConstants.SELECT_SERVER) {
            return console.log('si');
        };
        if (result.interactionCustomId === InteractionConstants.SELECT_CIRCUITO) {
            const response = await TiemposInteraction.execute(result);
            if (response?.status) return interaction.reply({ content: response.message });
            return await interaction.reply({ content: `${interaction.user.username}: ${response.content}`, embeds: [response.embeds],  });
        }
        //interaction.reply({ content: `Usted selecciono ${interaction.values[0]}` });
    }
})