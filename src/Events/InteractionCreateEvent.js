const client = require('../../afrt.js');

client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        console.log(command);
        if (!command) return interaction.followUp({ content: "Ocurrio un error inesperado" });
        const args = [];
        interaction.options.array().map((option) => {
            if (option.value) args.push(option.value);
            if (option.name) args.push(option.name);
        });
        command.run(client, interaction, args);
    }
    if (interaction.isSelectMenu()) {
        interaction.reply({ content: `Usted selecciono ${interaction.values[0]}` });
    }
})