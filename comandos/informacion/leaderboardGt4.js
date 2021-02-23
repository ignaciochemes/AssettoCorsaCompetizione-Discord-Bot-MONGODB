const Discord = require('discord.js');
const tiempoSchema = require('../../database/schemas/tiempos');

module.exports = {
    name: "tablagt4",
    aliases: ["lead"],
    category: "informacion",
    description: "Muestra una tabla de tiempos en una pista",
    usage: "!afrt tablagt4",
    run: async(client, message, args) => {
        let enviarEmbed = new Discord.MessageEmbed();
        
        if (!args[0]) {
            return message.reply(`Introduce una pista para ver la tabla de tiempos`)
        };

        const pistas = [
            "batu",
            "barcelona",
            "brands",
            "hungaroring",
            "misano",
            "monza",
            "nurburgring",
            "paulricarad",
            "silverstone",
            "spa",
            "zandvoort",
            "zolder",
            "imola",
            "kyalami",
            "suzuka",
            "laguna",
            "donington",
            "oulton",
            "snetterton"
        ];

        const found = await pistas.find(element => element === args[0]);

        if (args[0] !== found) {
            enviarEmbed.setDescription(`La pista elegida no se reconoce. Aqui te dejo una lista de las pistas que acepto.`)
            .addFields(
                { name: "Pistas", value:'```' + `${pistas}` + '```'},
            )
            return message.channel.send(enviarEmbed);
        
        } else {
        
            let leaderboard = await tiempoSchema.find({Categoria: "GT4", Pista: args[0]}).sort({Tiempo: 1}).limit(10).exec(
            function(err, res) {
                if(err) { 
                    console.log(`error`);
                    return message.reply(e);
                }
                console.log(res);
                if (!res[0]) {
                    return message.reply(`Aun no se registraron tiempos en esta pista`)
                } else {
                    enviarEmbed.setTitle(`AFRT leaderboard`)
                    .setDescription(`Pista elegida: \`${args[0]}\``)
					.setColor("#ff2929")
                    res.forEach(element => {
                        enviarEmbed.addField(`${element.Nombre}`, `Coche: \`${element.Coche}\` | Tiempo: \`${element.Tiempo}\``)
                    });
                message.channel.send(enviarEmbed);
                }
            });
        }
        
    }
}