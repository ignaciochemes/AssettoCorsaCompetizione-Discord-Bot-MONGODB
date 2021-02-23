const ping = require('ping');
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["p"],
    category: "informacion",
    description: "Devuelve ping del servidor",
    usage: "!afrt ping",
    run: async (client, message, args) => {
        let pwd = `${args}`;
        let enviarEmbed = new Discord.MessageEmbed();
        if (!args[0])
            return message.reply(`Inserta cualquier IP para hacer Ping`)
                .then(msg => {
                    msg.delete({timeout: 25000})
                });
        if (args[0] === '127.0.0.1')
            return message.reply('No se puede hacer Ping a esta IP')
                .then(m => {
                    m.delete({timeout: 15000})
                });
        try {
            let res = await ping.promise.probe(`${pwd}`, {
                timeout: 2,
            });
            if (res.avg === 'unknown') {
                return enviarEmbed.setDescription(`No es posible hacer Ping a esta IP`)
                    .addField("Packet loss:", `% ${Math.floor(res.packetLoss)}`)
            } else {
                console.log(res);
                enviarEmbed.setDescription(`Haciendo Ping a: ${res.host}`)
                    .addField("Ping AVG:", `${Math.floor(res.avg)} ms`)
                    .addField("Ubicacion del servidor", `Argentina`)
            }
        } catch (e) {
            console.log(e)
        } finally {
            message.channel.send(enviarEmbed);
        }
    }
}