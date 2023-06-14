const ping = require('ping');
const { EmbedBuilder } = require("discord.js");
const { GeneralConstants } = require('../../Constants/GeneralConstants');

module.exports = {
    name: "ping",
    aliases: ["p"],
    category: "informacion",
    description: "Devuelve ping del servidor",
    usage: "!afrt ping",
    run: async (client, message, args) => {
        let pwd = `${args}`;
        let enviarEmbed = new EmbedBuilder();
        if (!args[0]) return message.reply(`Inserta cualquier IP para hacer Ping`).then(msg => { msg.delete({timeout: GeneralConstants.BASH_MSG_TIMEOUT})});
        if (args[0] === '127.0.0.1') return message.reply('No se puede hacer Ping a esta IP').then(m => { m.delete({timeout: GeneralConstants.BASH_MSG_TIMEOUT}) });
        try {
            let res = await ping.promise.probe(`${pwd}`, { timeout: 2 });
            if (res.avg === 'unknown') return enviarEmbed.setDescription(`No es posible hacer Ping a esta IP`)
                .addField("Packet loss:", `% ${Math.floor(res.packetLoss)}`);
            enviarEmbed.setDescription(`Haciendo Ping a: ${res.host}`)
                .addField("Ping AVG:", `${Math.floor(res.avg)} ms`)
                .addField("Ubicacion del servidor", `Argentina`)
        } catch (e) {
            return message.channel.send(e);
        } finally {
            return message.channel.send(enviarEmbed);
        }
    }
}