const { GeneralConstants } = require("../../constants/genera.constants");

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
            await message.channel.awaitMessages(filter, { max: 1, time: GeneralConstants.DEFAULT_TIMEOUT }).then(collected => {
                killed = collected.first().content;
            });
            function responder() {
                let r = Math.floor(Math.random() * 8);
                let m = [];
                switch(r) {
                    case 0: m = message.channel.send(`Mataste a ${killed} de una forma espantosa.`);
                    break;
                    case 1: m = message.channel.send(`Muy buena apuñalada a ${killed}.`);
                    break;
                    case 2: m = message.channel.send(`Se re cago muriendo ${killed}.`);
                    break;
                    case 3: m = message.channel.send(`AFRT no tiene nada que ver. ${killed}, el responsable de tu muerte es ${message.author.name}`);
                    break;
                    case 4: m = message.channel.send(`${message.author.name} se metio con la persona equivocada... ${killed.toString().toUpperCase()}`); 
                    break;
                    case 5: m = message.channel.send(`A ${killed} le fallaron los frenos en la t1 de monza y lo empomo ${message.author.name}`);
                    break;
                    case 6: m = message.channel.send(`${message.author.name} puso aceite en Eau Rouge y ${killed} se la puso contra la pared matando a un espectador`);
                    break;
                    case 7: m = message.channel.send(`A ${killed} se le cayo el heli que sigue la trasmi mientras corria la carrera, todo fue planeado por ${message.author.name}`);
                }   
            }
            return message.channel.send(responder());
        }
}