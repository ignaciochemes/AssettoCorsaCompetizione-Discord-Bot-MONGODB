const Discord = require('discord.js');
const tiempoSchema = require('../../database/schemas/tiempos');

let tiempo = [];

module.exports = {
    name: "settiempogt4",
    aliases: ["tgt4"],
    category: "informacion",
    description: "Para setear tiempos de gt4",
    usage: "!afrt settiempogt4",
    run: async(client, message, args) => {
        const date = new Date();
        const formatMap = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            yyyy: date.getFullYear()
        };
        
        let enviarEmbed = new Discord.MessageEmbed();
        const inline = true;
        if (!args[0]) return message.reply(`Para setear un tiempo, tienes que indicar primero la pista y luego el tiempo. \nEj: \`-settiempo batu\` (Dan enter y luego el bot le preguntara para agregar el tiempo)`)
            .then(m => m.delete({timeout: 30000}));

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

            const coches = [
                "alpine",
                "aston",
                "audi",
                "bmw",
                "camaro",
                "ginetta",
                "ktm",
                "maserati",
                "570s",
                "amg",
                "porsche"
            ];

        const found = await pistas.find(element => element === args[0]);
        const found2 = await coches.find(element => element === args[2]);

        //if (args[0] !== 'batu' || args[0] !== "barcelona" || args[0] !== "brands" || args[0] !== "hungaroring" || args[0] !== "misano" || args[0] !== "monza" || args[0] !== "nurburgring" || args[0] !== "paulricard" || args[0] !== "silverstone" || args[0] !== "spa" || args[0] !== "zandvoort" || args[0] !== "zolder" || args[0] !== "imola") {  
        if (args[0] !== found) {
            enviarEmbed.setDescription(`La pista elegida no se reconoce. Aqui te dejo una lista de las pistas que acepto.`)
            .addField(
                { name: "Pistas", value:'```' + `${pistas}` + '```', inline }
            )
            return message.channel.send(enviarEmbed);
        }
        
        if (args[2] !== found2) {
            enviarEmbed.setDescription(`El coche elegido no se reconoce. Aqui te dejo una lista de los coches que acepto.`)
            .addFields(
                { name: "Coches", value:'```' + `${coches}` + '```', inline}
            )
            return message.channel.send(enviarEmbed);
        } else {
            let pepe = message.author.tag;
            try {
                const data = await tiempoSchema.findOne({
                    Usuario: "<@!" + message.author.id + ">",
                    Categoria: "GT4",
                    Pista: args[0],
                    Coche: args[2]
                });

                if (!data) {
                    
                    let newData = await tiempoSchema({
                        Usuario: "<@!" + message.author.id + ">",
                        Nombre: message.author.tag,
                        Categoria: "GT4",
                        Pista: args[0],
                        Tiempo: args[1],
                        Coche: args[2],
                        FechaDia: formatMap.dd,
                        FechaMes: formatMap.mm,
                        FechaAnio: formatMap.yyyy
                    });
                    newData.save();
                    enviarEmbed.setDescription(`Registro cargado por primera vez. \nInformacion registrada con exito! Si quieres ver tu tiempo, copia y pega el siguiente comando \`!afrt tiempo ${"<@!" + message.author.id + ">"} ${args[0]}\``)
                    .addFields(
                        { name: "Usuario", value:'```' + `${pepe}` + '```', inline},
                        { name: "Circuito", value:'```' + `${args[0]}` + '```', inline},
                        { name: "Tiempo", value:'```' + `${args[1]}` + '```', inline},
                        { name: "Coche", value:'```' + `${args[2]}` + '```', inline},
                        { name: "Fecha", value:'```' + `${formatMap.dd}/${formatMap.mm}/${formatMap.yyyy}` + '```', inline}
                    )
                    .setColor("#F8C300")
					.setFooter(`2021 © AFRT | Develop by Tato`)
                    .setTimestamp()
                    return message.channel.send(enviarEmbed);
            
                } else if (data) {
                    
                    await tiempoSchema.findOneAndReplace({
                        Usuario: "<@!" + message.author.id + ">",
                        Categoria: "GT4",
                        Pista: args[0]
                    });

                    let newData = await tiempoSchema({
                        Usuario: "<@!" + message.author.id + ">",
                        Nombre: message.author.tag,
                        Categoria: "GT4",
                        Pista: args[0],
                        Tiempo: args[1],
                        Coche: args[2],
                        FechaDia: formatMap.dd,
                        FechaMes: formatMap.mm,
                        FechaAnio: formatMap.yyyy
                    });
                    newData.save();
                    enviarEmbed.setDescription(`Registro existente editado!. \nInformacion registrada con exito! Si quieres ver tu tiempo, copia y pega el siguiente comando \`!afrt tiempo ${"<@!" + message.author.id + ">"} ${args[0]}\``)
                    .addFields(
                        { name: "Usuario", value:'```' + `${pepe}` + '```', inline},
                        { name: "Circuito", value:'```' + `${args[0]}` + '```', inline},
                        { name: "Tiempo", value:'```' + `${args[1]}` + '```', inline},
                        { name: "Coche", value:'```' + `${args[2]}` + '```', inline},
                        { name: "Fecha", value:'```' + `${formatMap.dd}/${formatMap.mm}/${formatMap.yyyy}` + '```', inline}
                    )
                    .setColor("#F8C300")
					.setFooter(`2021 © AFRT | Develop by Tato`)
                    .setTimestamp()
                    return message.channel.send(enviarEmbed);
                }
                
            } catch (e) {
                console.log(e);
                return message.reply(e + `Error`);
            }
        }
    }
}