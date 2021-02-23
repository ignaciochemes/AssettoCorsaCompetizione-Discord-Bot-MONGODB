const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

let killed = [];

module.exports = {
    name: "kill",
    aliases: ["p"],
    category: "informacion",
    description: "Mata a alguien",
    usage: "!afrt kill",
    run: async (client, message, args) => {            
            const filter = m => m.author.id === message.author.id;
            
            message.reply(`A quien quieres matar?`);

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {
                
                killed = collected.first().content;
                
            });
            function responder() {
                let r = Math.floor(Math.random() * 4);
                let m = [];
                switch(r) {
                    case 0: 
                        m = message.channel.send(`Mastaste a ${killed} de una forma espantosa.`);
                    break;
                    case 1: 
                        m = message.channel.send(`Muy buena apuñalada a ${killed}.`);
                    break;
                    case 2: 
                        m = message.channel.send(`Se re cago muriendo ${killed}.`);
                    break;
                    case 3: 
                        m = message.channel.send(`AFRT no tiene nada que ver. ${killed}, el responsable de tu muerte es ${message.author.id}`);
                }
            }
            return message.channel.send(responder());
        }
}