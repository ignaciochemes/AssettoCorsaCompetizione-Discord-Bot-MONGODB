const Discord = require("discord.js");
const tiempos = require("../../database/schemas/usuarios.schema");
const tiempoSchema = require('../../database/schemas/usuarios.schema');

module.exports = {
    name: "tiempo",
    aliases: ["t"],
    category: "informacion",
    description: "Comando para pispear tiempos de GT3 - GT4",
    usage: "!afrt tiempo",
    run: async(client, message, args) => {
        const enviarEmbed = new Discord.MessageEmbed();

        if (!args[0]) return message.reply(`Tienes que ingresar el nombre del usuario de discord y luego la pista. \n Ej: !afrt tiempo \`@agustin lavia\` \`batu\`. \n \`IMPORTANTE! ETIQUETAR AL USUARIO\``)
            .then(m => m.delete({timeout: 30000}));

        const pistas = [
            "batu",
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

        const found = await pistas.find(element => element === args[1]);

        //if (args[0] !== 'batu' || args[0] !== "barcelona" || args[0] !== "brands" || args[0] !== "hungaroring" || args[0] !== "misano" || args[0] !== "monza" || args[0] !== "nurburgring" || args[0] !== "paulricard" || args[0] !== "silverstone" || args[0] !== "spa" || args[0] !== "zandvoort" || args[0] !== "zolder" || args[0] !== "imola") {  
        if (args[1] !== found) {
            return message.reply(`La pista elegida no se reconoce. Aqui te dejo una lista de las pistas que acepto. \n
            batu
            barcelona
            brands
            hungaroring
            misano
            monza
            nurburgring
            paulricarad
            silverstone
            spa
            zandvoort
            zolder
            imola
            kyalami
            suzuka
            laguna
            donington
            oulton
            snetterton
            \n
            \`COPIA Y PEGA ;)\`
            `)
        } else {

            try {
                const data = await tiempoSchema.findOne({
                    Usuario: "<@!" + message.author.id + ">",
                });

                const datagt3 = await tiempoSchema.findOne({
                    Usuario: "<@!" + message.author.id + ">",
                    Categoria: "GT3",
                    Pista: args[1]
                });

                const datagt4 = await tiempoSchema.findOne({
                    Usuario: "<@!" + message.author.id + ">",
                    Categoria: "GT4",
                    Pista: args[1]
                });

                if (!data) {
                    return message.reply(`No se encontraron registros del usuario ${args[0]} en la pista ${args[1]}`);
                }    
                    
                if (!datagt4) {

                    let pista = datagt3.Pista;
                    let tiempogt3 = datagt3.Tiempo;
                    let cochegt3 = datagt3.Coche;
                    
                    enviarEmbed.setDescription("<@" + message.author.id + ">")
                    .addFields(
                        { name: "PISTA", value:'```' + `${pista}` + '```', },
                        { name: "TIEMPO", value:'```' + `Tiempo GT3: ${tiempogt3} \nTiempo GT4: Sin registro` + '```', inline: true },
                        { name: "COCHE", value:'```' + `GT3: ${cochegt3} \nGT4: Sin registro` + '```', inline: true },
                        { name: "FECHA", value:'```' + `GT3: ${datagt3.FechaDia}/${datagt3.FechaMes}/${datagt3.FechaAnio} \nGT4: Sin registro` + '```', inline: true },
                        )
                    .setColor("#F8C300")
                    .setFooter(`2021 © AFRT | Develop by Tato`)
                    .setTimestamp()
                }
                if (!datagt3) {
                    
                    let pista = datagt4.Pista;
                    let tiempogt4 = datagt4.Tiempo;
                    let cochegt4 = datagt4.Coche;

                    enviarEmbed.setDescription("<@" + message.author.id + ">")
                    .addFields(
                        { name: "PISTA", value:'```' + `${pista}` + '```', },
                        { name: "TIEMPO", value:'```' + `Tiempo GT3: Sin registro \nTiempo GT4: ${tiempogt4}` + '```', inline: true },
                        { name: "COCHE", value:'```' + `GT3: Sin registro \nGT4: ${cochegt4}` + '```', inline: true },
                        { name: "FECHA", value:'```' + `GT3: Sin registro \nGT4: ${datagt4.FechaDia}/${datagt4.FechaMes}/${datagt4.FechaAnio}` + '```', inline: true },
                        )
                    .setColor("#F8C300")
                    .setFooter(`2021 © AFRT | Develop by Tato`)
                    .setTimestamp()
                   } else if (datagt3, datagt4) {

                    let pista = datagt3.Pista;
                    let tiempogt3 = datagt3.Tiempo;
                    let cochegt3 = datagt3.Coche;
                    let tiempogt4 = datagt4.Tiempo;
                    let cochegt4 = datagt4.Coche;

                    enviarEmbed.setDescription("<@" + message.author.id + ">")
                    .addFields(
                        { name: "PISTA", value:'```' + `${pista}` + '```', },
                        { name: "TIEMPO", value:'```' + `Tiempo GT3: ${tiempogt3} \nTiempo GT4: ${tiempogt4}` + '```', inline: true },
                        { name: "COCHE", value:'```' + `GT3: ${cochegt3} \nGT4: ${cochegt4}` + '```', inline: true },
                        { name: "FECHA", value:'```' + `GT3: ${datagt3.FechaDia}/${datagt3.FechaMes}/${datagt3.FechaAnio} \nGT4: ${datagt4.FechaDia}/${datagt4.FechaMes}/${datagt4.FechaAnio}` + '```', inline: true },
                        )
                    .setColor("#F8C300")
                    .setFooter(`2021 © AFRT | Develop by Tato`)
                    .setTimestamp()
                }
                message.channel.send(enviarEmbed);
            
            } catch (e) {
                console.log(e);
                return message.reply(e + `Error`);
            }
        }
    }
}