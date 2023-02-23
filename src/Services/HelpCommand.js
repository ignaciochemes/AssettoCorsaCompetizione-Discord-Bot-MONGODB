const { stripIndent } = require('common-tags');
const { EmbedBuilder } = require('discord.js');
const { GeneralConstants } = require('../Constants/GeneralConstants');
const { TextConstants } = require('../Constants/TextConstants');

class HelpCommand {
    static _message = new EmbedBuilder();

    static getAll(client, message) {
        const emb = this._message.setTitle(TextConstants.HELP_LIST_COMMANDS)
            .setColor(GeneralConstants.DEFAULT_COLOR)
            .setDescription(`Type the command !afrt + <command> ex: \`!afrt ping\` to see the functions`)
            .setThumbnail('https://i.imgur.com/mnSJzVk.jpg');
        const commands = (category) => { return client.commands.filter(cmd => cmd.category === category).map(cmd => `- \`${cmd.name}\``).join('\n') };
        const info = client.categories
            .map(cat => stripIndent`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
            .reduce((string, category) => string + "\n" + category);
        return message.channel.send(emb.setDescription(info));
    }

    static getCmd(client, message, input) {
        const emb = this._message
        const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
        let info = `No command information found **${input.toLowerCase()}**`;
        if (!cmd) return message.channel.send(embed.setColor("RED").setDescription(info));
        if (cmd.name) info = `**Command Name**: ${cmd.name}`;
        if (cmd.aliases) info += `\n**Alias**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
        if (cmd.description) info += `\n**Description**: ${cmd.description}`;
        if (cmd.usage) {
            info += `\n**How to use**: ${cmd.usage}`;
            emb.setFooter(`Syntax: <-> = required, [] = optional`);
        }
        return message.channel.send(embed.setColor("GREEN").setDescription(info));
    }
}

module.exports = { HelpCommand };