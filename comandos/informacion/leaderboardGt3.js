const { MessageEmbed } = require('discord.js');
const { Pistas } = require('../../constants/pistas.constants');
const { TiemposTabla } = require('../../complementos/tiemposTabla');
const { TextConstants } = require('../../constants/text.constants');
const { GeneralConstants } = require('../../constants/genera.constants');

module.exports = {
    name: "tablagt3",
    aliases: ["lead"],
    category: "informacion",
    description: "Muestra una tabla de tiempos en una pista",
    usage: "!afrt tablagt3",
    run: async(client, message, args) => {
        const emb = new MessageEmbed();
        if (!args[0]) return message.reply(TextConstants.TABLA_NO_ARGS)
        let res = await TiemposTabla.getTablaGt3(args[0], "GT3");
        if(res === false) {
            emb.setDescription(TextConstants.TABLA_ERROR_PISTA)
            .addFields({ name: "Pistas", value:'```' + `${Pistas.pistas}` + '```'})
            return message.channel.send(emb);
        }
        if(!res[0]) return message.reply(TextConstants.TABLA_NO_TIEMPOS);
        emb.setTitle(`AFRT leaderboard`)
        .setDescription(`Pista elegida: \`${args[0]}\``)
		.setColor(GeneralConstants.DEFAULT_COLOR)
        .setFooter(GeneralConstants.DEFAULT_FOOTER)
        res.forEach(element => { emb.addField(`${element.nombre} ${element.apellido}`, `Tiempo: \`${element.bestLap}\``) });
        return message.channel.send(emb);
        
    }
}