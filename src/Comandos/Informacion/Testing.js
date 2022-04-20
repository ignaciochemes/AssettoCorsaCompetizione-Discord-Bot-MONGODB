const { MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: "testing",
    aliases: ["testing"],
    category: "information",
    description: "Testing command",
    usage: "!afrt testing",
    run: async (client, message, args) => {

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Primary')
                    .setStyle('PRIMARY')
            );
        return channel.send({ content: 'test', components: [row] });
    }
}