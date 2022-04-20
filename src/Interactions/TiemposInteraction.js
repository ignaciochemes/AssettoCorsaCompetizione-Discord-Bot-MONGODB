const { MessageEmbed } = require("discord.js");
const { TiemposTabla } = require("../Complementos/TiemposTablas");
const { GeneralConstants } = require("../Constants/GeneralConstants");
const { TextConstants } = require("../Constants/TextConstants");
const { CustomErrorException } = require("../Helpers/CustomErrorException");
const { MsToSegundos } = require("../Utils/Resultados/MsToSegundos");

class TiemposInteraction {
    static async execute(interaction) {
        const emb = new MessageEmbed();
        const res = await TiemposTabla.getTablaGt3(interaction.interactionValue, "GT3");
        if (res === false) return new CustomErrorException('Error al obtener la tabla de tiempos', 100);
        if (!res[0]) return new CustomErrorException(TextConstants.TABLA_NO_TIEMPOS, 101);
        let bestLapForTrack = res[0].bestLapNum;
        emb.setTitle(`AFRT leaderboard`)
        .setDescription(`Pista elegida: \`${interaction.interactionValue}\``)
		.setColor(GeneralConstants.DEFAULT_COLOR)
        .setFooter({ text: GeneralConstants.DEFAULT_FOOTER })
        res.forEach(element => {
            emb.addField(
            `${element.nombre} ${element.apellido}`, 
            `- Tiempo: \`${element.bestLap}\` || Gap: \`+ ${MsToSegundos.msToSegundos(element.bestLapNum - bestLapForTrack)}\`
            - S1 \`${element.splitUno}\` S2 \`${element.splitDos}\` S3 \`${element.splitTres}\`
            - Coche: \`${element.coche}\`
            - Fecha: \`${element.fecha}\``
            )
        });
        const response = { content: `Seleccionado ${interaction.interactionValue}`, embeds: emb };
    return response;
    }
}

module.exports = { TiemposInteraction };