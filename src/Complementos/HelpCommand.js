const { stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');
const { GeneralConstants } = require('../Constants/GeneralConstants');
const { TextConstants } = require('../Constants/TextConstants');

class HelpCommand {
    static _message = new MessageEmbed();
    
    static getAll(client, message) {
        const emb = this._message.setTitle(TextConstants.HELP_LIST_COMMANDS)
        .setColor(GeneralConstants.DEFAULT_COLOR)
        .setDescription(`Escriba el comando !afrt + <command> ex: \`!afrt ping\` para ver las funciones`)
        .setThumbnail('https://i.imgur.com/mnSJzVk.jpg');
        const commands = (category) => { return client.commands.filter(cmd => cmd.category === category).map(cmd => `- \`${cmd.name}\``).join('\n') };
        const info = client.categories
        .map(cat => stripIndent `**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);
        return message.channel.send(emb.setDescription(info));
    }

    static getCmd(client, message, input) {
        const emb = this._message
        const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
        let info = `No se encuentra informacion del comando **${input.toLowerCase()}**`;
        if(!cmd) return message.channel.send(embed.setColor("RED").setDescription(info));
        if (cmd.name) info = `**Nombre del comando**: ${cmd.name}`;
        if (cmd.aliases) info += `\n**Alias**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
        if (cmd.description) info += `\n**Descripcion**: ${cmd.description}`;
        if (cmd.usage) {
            info += `\n**Como usar**: ${cmd.usage}`;
            emb.setFooter(`Syntax: <-> = requerido, [] = opcional`);
        }
        return message.channel.send(embed.setColor("GREEN").setDescription(info));
    }
}

module.exports = { HelpCommand };